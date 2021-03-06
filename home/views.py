from django.contrib import messages
from django.contrib.auth.forms import PasswordChangeForm
from django.shortcuts import render, redirect
import logging
from django.contrib.auth import authenticate, login as loginuser, update_session_auth_hash
from django.contrib.auth.models import User as Authuser
import forum.views as forum
from forum.models import Post, Comment
from home.models import Problem, Question, CodeSegment, UserProgress, UserVotes, QuestionComment, CommentVotes, \
    UserEditorSettings
from django.contrib.auth.decorators import login_required
from home.codeCache import CodeCache
import requests
from django.http import HttpResponse
from django.db.models import Q, Sum
import re
import random

from django_user_agents.utils import get_user_agent

# logger = logging.getLogger(__name__)
# logging.basicConfig(filename="logs/imperialcode_debug.log", level=logging.DEBUG)


code_cache = CodeCache()


def landing(request):
    if request.user.is_authenticated:
        return redirect("../index")
    if request.method == "POST":
        uname = request.POST['u4_input']
        pw = request.POST['u5_input']
        user = authenticate(username=uname, password=pw)
        if user is not None:
            loginuser(request, user)
            return redirect("../index")
    return render(request, "home/landing_page.html")


def sign_up(request):
    if request.user.is_authenticated:
        return redirect("../index")
    if request.method == "POST":
        uname = request.POST["username"]
        pw = request.POST["password"]
        cpw = request.POST["confirmpassword"]
        if pw != cpw:
            message = "inconsistent password"
        try:
            user = Authuser.objects.create_user(uname, password=pw)
            user.save()
            return redirect("/")
        except:
            message = "invalid"
    else:
        message = ""
    context = {"msg": message}
    return render(request, "home/signup_page.html", context)


@login_required
def all_problems_page(request):
    user_agent = get_user_agent(request)
    results = Problem.objects.all()
    problem_progress = UserProgress.objects.filter(user_id=request.user.id)
    if request.GET.get("keywords") is not None:
        kw = request.GET.get("keywords")
        results = results.filter(Q(title__contains=kw) | Q(desc__contains=kw))
        if kw.isdigit():
            results = results.filter(id=kw)
    if request.GET.get("lang") is not None:
        results = results.filter(language=request.GET.get("lang"))
    if request.GET.get("diff") is not None:
        results = results.filter(difficulty=request.GET.get("diff"))
    if request.GET.get("cat") is not None:
        results = results.filter(category=request.GET.get("cat"))
    if request.GET.get("type") is not None:
        results = results.filter(type=request.GET.get("type"))
    if request.GET.get("status") is not None:
        status = request.GET.get("status")
        if status == "Todo":
            results = results.exclude(id__in=problem_progress)
        else:
            temp_solved = []
            temp_in_progress = []
            for single_process in problem_progress.iterator():
                if len(Question.objects.filter(problem_id=single_process.problem_id)) == len(single_process.progress):
                    temp_solved.append(single_process.problem_id)
                else:
                    temp_in_progress.append(single_process.problem_id)
            if status == "In Progress":
                results = results.filter(id__in=temp_in_progress)
            elif status == "Solved":
                results = results.filter(id__in=temp_solved)

    num_todo = len(Problem.objects.all().exclude(id__in=problem_progress))
    temp_solved = []
    temp_in_progress = []
    for single_process in problem_progress.iterator():
        if len(Question.objects.filter(problem_id=single_process.problem_id)) == len(single_process.progress):
            temp_solved.append(single_process.problem_id)
        else:
            temp_in_progress.append(single_process.problem_id)
    num_in_progress = len(Problem.objects.all().filter(id__in=temp_in_progress))
    num_solved = len(Problem.objects.all().filter(id__in=temp_solved))
    num_total = num_todo + num_in_progress + num_solved
    overall_progress = [num_total, num_todo, num_in_progress, num_solved]

    selected_title = request.GET.get("p") if request.GET.get("p") else ""
    selected_problems = Problem.objects.filter(title=selected_title)
    user_progress = UserProgress.objects.filter(user_id=request.user.id, problem__title=selected_title)
    subquestions = Question.objects.filter(problem__title=selected_title)
    user_vote = UserVotes.objects.filter(user=request.user, problem__title=selected_title)
    selected_problem_info = {}
    if len(selected_problems) == 0:
        selected_problem_info["title"] = ""
        selected_problem_info["desc"] = ""
        selected_problem_info["year"] = 0
        selected_problem_info["difficulty"] = 0
        selected_problem_info["upvotes"] = 0
        selected_problem_info["progress"] = 0
        selected_problem_info["user_vote"] = 0
        selected_problem_info["comment_num"] = 0
    else:
        comment_num = 0
        for subquestion in subquestions.iterator():
            comment_num += len(QuestionComment.objects.filter(question_id=subquestion.id))
        selected_problem_info["title"] = selected_problems[0].title
        selected_problem_info["desc"] = selected_problems[0].desc
        selected_problem_info["year"] = selected_problems[0].year
        selected_problem_info["difficulty"] = selected_problems[0].difficulty
        selected_problem_info["upvotes"] = __get_problem_votes(selected_problems[0].id)
        selected_problem_info["progress"] = int((len(user_progress[0].progress) / len(subquestions)) * 100) \
            if user_progress else 0
        selected_problem_info["user_vote"] = user_vote[0].vote if user_vote else 0
        selected_problem_info["comment_num"] = comment_num
    selected_problem_info["difficulty"] = "★" * selected_problem_info["difficulty"];
    context = {"display_problems": results,
               "selected_problem": selected_problem_info,
               "overall_progress": overall_progress, "user_agent": user_agent}
    return render(request, "home/all_problems_page.html", context)


@login_required
def forum_page(request):
    return render(request, "home/forum_page.html")


@login_required
def index(request):
    user_agent = get_user_agent(request)
    progress = UserProgress.objects.filter(user_id=request.user.id)
    problem_title = ""
    all_problems = Problem.objects.all()
    upvotes = []
    for problem in all_problems:
        total = sum([uv.vote for uv in UserVotes.objects.filter(problem=problem)])
        problem.difficulty = problem.difficulty * "★"
        upvotes.append((total, problem))
    upvotes.sort(key=lambda x: x[0], reverse=True)
    most_upvoted = upvotes[:min(len(upvotes), 9)]
    obj = type('obj', (object,), {'language': '', 'title': '', "difficulty": ""})
    for i in range(9 - len(most_upvoted)):
        most_upvoted.append(('', obj))

    haskell_problems = Problem.objects.filter(language="Haskell")
    haskell_completed = 0
    for problem in haskell_problems.iterator():
        total_question_num = len(Question.objects.filter(problem_id=problem.id))
        user_progress = UserProgress.objects.filter(user=request.user, problem_id=problem.id)
        finished_subquestions = len(user_progress[0].progress) if user_progress else 0
        if finished_subquestions == total_question_num and (not total_question_num == 0):
            haskell_completed += 1
    haskell_progress = round(haskell_completed / len(haskell_problems), 2)

    if progress:
        progress = progress.latest("last_modified")
        problem_title = Problem.objects.filter(id=progress.problem_id)[0].title

    context = {
        "last_modified_problem": problem_title,
        "most_upvoted": most_upvoted,
        "haskell_progress": haskell_progress,
        "user_agent": user_agent}
    return render(request, "home/index.html", context)


def past_papers_page(request):
    user_agent = get_user_agent(request)
    results = Problem.objects.filter(type=Problem.Type.EXAM, category=Problem.Category.NONE)
    if request.GET.get("keywords") is not None:
        kw = request.GET.get("keywords")
        results = results.filter(Q(title__contains=kw) | Q(desc__contains=kw))
        if kw.isdigit():
            results = results.filter(id=kw)
    if request.GET.get("lang") is not None:
        results = results.filter(language=request.GET.get("lang"))
    if request.GET.get("year") is not None:
        results = results.filter(year=request.GET.get("year"))
    if request.GET.get("diff") is not None:
        results = results.filter(difficulty=request.GET.get("diff"))
    if request.GET.get("status") is not None:
        status = request.GET.get("status")
        problem_progress = UserProgress.objects.filter(user_id=request.user.id)
        if status == "Todo":
            results = results.exclude(id__in=problem_progress)
        else:
            temp_solved = []
            temp_in_progress = []
            for single_process in problem_progress.iterator():
                if len(Question.objects.filter(problem_id=single_process.problem_id)) == len(single_process.progress):
                    temp_solved.append(single_process.problem_id)
                else:
                    temp_in_progress.append(single_process.problem_id)
            if status == "In Progress":
                results = results.filter(id__in=temp_in_progress)
            elif status == "Solved":
                results = results.filter(id__in=temp_solved)

    selected_title = request.GET.get("p") if request.GET.get("p") is not None else ""
    selected_paper = Problem.objects.filter(title=selected_title)
    user_progress = UserProgress.objects.filter(user_id=request.user.id, problem__title=selected_title)
    subquestions = Question.objects.filter(problem__title=selected_title)
    selected_paper_info = {}
    user_vote = UserVotes.objects.filter(user_id=request.user.id, problem__title=selected_title)
    if len(selected_paper) == 0:
        selected_paper_info["title"] = ""
        selected_paper_info["desc"] = ""
        selected_paper_info["year"] = 0
        selected_paper_info["status"] = ""
        selected_paper_info["difficulty"] = 0
        selected_paper_info["upvotes"] = 0
        selected_paper_info["progress"] = 0
        selected_paper_info["user_vote"] = 0
        selected_paper_info["comment_num"] = 0
    else:
        comment_num = 0
        for subquestion in subquestions.iterator():
            comment_num += len(QuestionComment.objects.filter(question_id=subquestion.id))
        selected_paper_info["title"] = selected_paper[0].title
        selected_paper_info["desc"] = selected_paper[0].desc
        selected_paper_info["year"] = selected_paper[0].year
        selected_paper_info["status"] = ""
        selected_paper_info["difficulty"] = selected_paper[0].difficulty
        selected_paper_info["upvotes"] = __get_problem_votes(selected_paper[0].id)
        selected_paper_info["progress"] = int((len(user_progress[0].progress) / len(subquestions)) * 100) \
            if user_progress else 0
        selected_paper_info["user_vote"] = user_vote[0].vote if user_vote else 0
        selected_paper_info["comment_num"] = comment_num

    selected_paper_info["difficulty"] = "★" * selected_paper_info["difficulty"]
    context = {"display_papers": results, "selected_paper": selected_paper_info, "user_agent": user_agent}
    return render(request, "home/past_papers_page.html", context)


@login_required
def problem_creation_page(request):
    context = {}
    return render(request, "home/problem_creation_page.html", context)


@login_required
def question_comment_page(request):
    user_agent = get_user_agent(request)
    pname = request.GET.get("papername")
    qindex = int(request.GET.get("question_index"))
    qname = pname + " question " + str(qindex + 1)
    question = Question.objects.filter(question_index=qindex, problem__title=pname)[0]
    question_id = question.id
    if request.method == "POST":
        comment_title = request.POST["post_title"]
        content = request.POST["post_content"]
        comment = QuestionComment(question=question, parent_comment=None, user=request.user,
                                  title=comment_title, desc=content)
        comment.save()
    comments = QuestionComment.objects.filter(question=question_id, parent_comment=None).order_by('-views')
    comments_with_extra_info = []
    for comment in comments.iterator():
        comments_with_extra_info.append({
            "id": comment.id,
            "user": comment.user,
            "title": comment.title,
            "create_at": comment.created_at,
            "upvotes": __get_comment_votes(comment.id),
            "views": comment.views,
            "num_comments": __get_sub_comment_num(comment.id)
        })
    context = {
        "qname": qname,
        "posts": comments_with_extra_info,
        "pname": pname,
        "qindex": qindex,
        "user_agent": user_agent}

    return render(request, "home/question_comment_page.html", context)


@login_required
def past_paper_update_progress(request):
    if request.method == "POST":
        q_index = int(request.POST.get("index"))
        pname = request.POST.get("pname")
        progress = UserProgress.objects.filter(problem__title=pname, user_id=request.user.id)
        if progress:
            user_progress = progress[0]
            completed_questions = user_progress.progress
            if q_index not in completed_questions:
                completed_questions.append(q_index)
                user_progress.progress = completed_questions
                user_progress.save()
        else:
            problem_id = Problem.objects.filter(title=pname)[0].id
            new_progress = UserProgress(user_id=request.user.id, problem_id=problem_id, stopped_at=0,
                                        progress=[q_index])
            new_progress.save()

    return HttpResponse("", content_type="text/plain")


@login_required
def save_code(request):
    if request.method == "POST":
        pname = request.POST.get("pname")
        q_index = int(request.POST.get("index"))
        code = request.POST.get("code")
        code_cache.add(pname, q_index, request.user.id, code)
    return HttpResponse("", content_type="text/plain")


@login_required
def record_current_question(request):
    if request.method == "POST":
        pname = request.POST.get("pname")
        index = int(request.POST.get("index"))
        progress = UserProgress.objects.filter(problem__title=pname, user_id=request.user.id)
        if progress:
            user_progress = progress[0]
            user_progress.stopped_at = index
            user_progress.save()
        else:
            problem_id = Problem.objects.filter(title=pname)[0].id
            new_progress = UserProgress(user_id=request.user.id, problem_id=problem_id, stopped_at=index, progress=[])
            new_progress.save()
    return HttpResponse("", content_type="text/plain")


@login_required
def run_code(request):
    output = ""
    if request.method == "POST":
        all_code = request.POST.get("code", "", )
        response = requests.post('https://api.jdoodle.com/v1/execute',
                                 json={'clientId': "e3762b799cdb4c3ee07e092f6041ce08",
                                       'clientSecret': '123904cc5aa37569cb7fecc393154e7e4d9d3375d08932ef4f7109affd2dda6b',
                                       'script': all_code,
                                       'stdin': "",
                                       'language': "haskell",
                                       'versionIndex': '0'})
        try:
            # try except is used because the external api may not be reliable
            output = response.json()["output"]
            output = re.sub('\( jdoodle.hs, jdoodle.o \)', '', output)
            output = re.sub('Linking jdoodle ...', '', output)
        except:
            pass
    return HttpResponse(output, content_type="text/plain")


@login_required
def question_solving_page(request):
    user_agent = get_user_agent(request)
    pname = request.GET.get("papername")
    if len(Problem.objects.filter(title=pname)) == 0:
        return redirect('/')
    paper = Problem.objects.filter(title=pname)[0]
    questions = Question.objects.filter(problem__title=pname).order_by("question_index")
    code_segments_stored = CodeSegment.objects.filter(problem__title=pname).order_by("index")
    code_segments = []
    progress = UserProgress.objects.filter(problem__title=pname, user_id=request.user.id)
    code_cache.dump()
    for i in range(len(code_segments_stored)):
        cached_segment = code_cache.get(pname, code_segments_stored[i].index, request.user.id)
        if cached_segment is not None:
            code_segments.append(cached_segment)
        else:
            code_segments.append(code_segments_stored[i].code)
    questions_clean = []
    for question in questions:
        questions_clean.append({
            "desc": question.question_desc,
            "test_script": question.test_script.replace("\\", "\\\\").replace("`", "\`")
        })
    code_segments_clean = []
    for code_segment in code_segments:
        code_segments_clean.append(code_segment.replace("\\", "\\\\").replace("`", "\`"))
    editor_setting = UserEditorSettings.objects.filter(user=request.user)
    if editor_setting:
        user_setting = editor_setting[0]
    else:
        user_setting = UserEditorSettings(user=request.user)
        user_setting.save()
    context = {
        "paper": paper,
        "questions": questions_clean,
        "code_segments": code_segments_clean,
        "stopped_at": progress[0].stopped_at if progress else 0,
        "finished_subquestions": progress[0].progress if progress else [],
        "editor_settings": user_setting,
        "is_empty": len(questions) == 0,
        "user_agent": user_agent
    }
    return render(request, "home/question_solving_page.html", context)


prev_page = ""


def comment_detail(request):
    user_agent = get_user_agent(request)
    comment_id = int(request.GET.get("id"))
    comment = QuestionComment.objects.filter(id=comment_id)[0]
    comment.views += 1
    new_title = request.GET.get("new_title")
    new_content = request.GET.get("new_content")
    if new_title is not None and new_content is not None:
        comment.title = new_title
        comment.desc = new_content
    comment.save()
    global prev_page
    if request.method == "POST":
        comment_content = request.POST["comment_content"]
        new_comment = QuestionComment(question=comment.question, parent_comment=comment,
                                      user=request.user, title="", desc=comment_content.replace("`", "\`"))
        new_comment.save()
    else:
        prev_page = request.META.get('HTTP_REFERER')
    sub_comments = QuestionComment.objects.filter(parent_comment=comment).order_by("-created_at")
    sub_comments_with_extra_info = []
    user_comment_votes = [__get_user_vote(request.user, comment_id)]
    for sub_comment in sub_comments.iterator():
        sub_comments_with_extra_info.append({
            "id": sub_comment.id,
            "user": sub_comment.user,
            "desc": sub_comment.desc,
            "created_at": sub_comment.created_at,
            "upvotes": __get_comment_votes(sub_comment.id)
        })
        user_comment_votes.append(__get_user_vote(request.user, sub_comment.id))

    context = {
        "post": comment,
        "main_post_upvotes": __get_comment_votes(comment_id),
        "prev_page": str(prev_page),
        "comments": sub_comments_with_extra_info,
        "user_agent": user_agent,
        "user_votes": user_comment_votes
    }
    return render(request, "home/comment_detail.html", context)


def random_problem(request):
    results = Problem.objects.filter(~Q(type=Problem.Type.EXAM), category=Problem.Category.NONE)
    if len(results) == 0:
        return redirect("/")
    r = random.randint(0, len(results) - 1)
    problem = results[r]
    name = problem.title
    return redirect("/question_solving_page?papername=" + name)


def signup_page(request):
    return render(request, "home/signup_page.html")


@login_required
def single_post_page(request):
    return render(request, "home/single_post_page.html")


@login_required
def user_info_page(request):
    user_agent = get_user_agent(request)
    user = request.user
    post_set = []
    for post in Post.objects.filter(user=user).iterator():
        post_set.append({
            "slug": post.slug,
            "title": post.title,
            "upvotes": forum.get_post_votes(post.id),
            "num_comments": len(Comment.objects.filter(forum_id=post.id))
        })
    comment_set = Comment.objects.filter(user=user)
    comments = []
    for comment in comment_set.iterator():
        corresponding_post = Post.objects.get(id=comment.forum_id)
        comments.append({
            "post_slug": corresponding_post.slug,
            "post_title": corresponding_post.title,
            "upvotes": forum.get_comment_votes(comment.id),
            "created_at": comment.created_at
        })
    question_comment_set = []
    for question_comment in QuestionComment.objects.filter(user=user, parent_comment__isnull=True).iterator():
        question_comment_set.append({
            "id": question_comment.id,
            "title": question_comment.title,
            "upvotes": __get_comment_votes(question_comment.id),
            "num_comments": __get_sub_comment_num(question_comment.id)
        })

    question_reply_set = QuestionComment.objects.filter(user=user, parent_comment__isnull=False)
    question_comment_replies = []
    for reply in question_reply_set.iterator():
        corresponding_comment = QuestionComment.objects.get(id=reply.parent_comment.id)
        question_comment_replies.append({
            "comment_id": corresponding_comment.id,
            "comment_title": corresponding_comment.title,
            "upvotes": __get_comment_votes(reply.id),
            "created_at": reply.created_at
        })
    context = {
        "current_user": user,
        "user_posts": post_set,
        "user_comments": comments,
        "question_comments": question_comment_set,
        "question_comment_replies": question_comment_replies,
        "user_agent": user_agent
    }
    return render(request, "home/user_info_page.html", context)


def start(request):
    return render(request, "home/start.html")


def start_c_1(request):
    return render(request, "home/start_c_1.html")


@login_required
def start_with_pages(request):
    return render(request, "home/start_with_pages.html")


def expand(request):
    return render(request, "home/expand.html")


def Other(request):
    return render(request, "home/Other.html")


def reload(request):
    return render(request, "home/reload.html")


def page_not_found_view(request, *args, **kwargs):
    response = render(request, "home/404.html")
    response.status_code = 404
    return response


def server_error_view(request, *args, **kwargs):
    response = render(request, "home/404.html")
    response.status_code = 500
    return response


def save_edited_comment(request):
    if request.method == "POST":
        comment_id = request.POST["id"]
        new_content = request.POST["content"]
        sub_comment = QuestionComment.objects.get(id=comment_id)
        sub_comment.desc = new_content
        sub_comment.save()
    return HttpResponse("", content_type="text/plain")


def delete_comment(request):
    if request.method == "POST":
        comment_id = request.POST["id"]
        comment = QuestionComment.objects.get(id=comment_id)
        comment.delete()
    return HttpResponse("", content_type="text/plain")


# register problem vote
def register_problem_vote(request):
    if request.method == "POST":
        pname = request.POST.get("pname")
        vote_type = int(request.POST.get("type"))
        problem = Problem.objects.get(title=pname)
        user_vote = UserVotes.objects.filter(user_id=request.user.id, problem=problem.id)
        if user_vote:
            user_vote[0].vote = vote_type
            user_vote[0].save()
        else:
            new_vote = UserVotes(user_id=request.user.id, problem_id=problem.id, vote=vote_type)
            new_vote.save()
    return HttpResponse("", content_type="text/plain")


def register_comment_vote(request):
    if request.method == "POST":
        comment_id = request.POST["id"]
        vote_type = int(request.POST["type"])
        comment_vote = CommentVotes.objects.filter(user_id=request.user.id, comment_id=comment_id)
        if comment_vote:
            comment_vote[0].vote = vote_type
            comment_vote[0].save()
        else:
            new_vote = CommentVotes(user=request.user, comment_id=comment_id, vote=vote_type)
            new_vote.save()
    return HttpResponse("", content_type="text/plain")


def save_editor_settings(request):
    if request.method == "POST":
        font_size = int(request.POST["font_size"][:2])
        theme = request.POST["theme"]
        key_binding = request.POST["key_binding"]
        user_settings = UserEditorSettings.objects.get(user=request.user)
        user_settings.font_size = font_size
        user_settings.theme = theme
        user_settings.key_binding = key_binding
        user_settings.save()
    return HttpResponse("", content_type="text/plain")


def __get_problem_votes(problem_id):
    total_votes = UserVotes.objects.filter(problem_id=problem_id).aggregate(Sum("vote"))["vote__sum"]
    return total_votes if total_votes else 0


def __get_comment_votes(comment_id):
    total_votes = CommentVotes.objects.filter(comment_id=comment_id).aggregate(Sum("vote"))["vote__sum"]
    return total_votes if total_votes else 0


def __get_sub_comment_num(parent_id):
    return len(QuestionComment.objects.filter(parent_comment_id=parent_id))


def __get_user_vote(user, comment_id):
    vote = CommentVotes.objects.filter(user=user, comment_id=comment_id)
    return vote[0].vote if vote else 0


def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important!
            messages.success(request, 'Your password was successfully updated!')
            return redirect('change_password')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'home/user_info_page.html', {
        'form': form
    })
