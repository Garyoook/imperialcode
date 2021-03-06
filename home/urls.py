from django.conf.urls import url
from django.urls import path

from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views

urlpatterns = [
                  url(r'^sign_up/', views.sign_up),
                  url(r'^landing_page', views.landing, name="landing_page"),
                  url(r'^all_problems_page', views.all_problems_page, name="all_problems_page"),
                  url(r'^forum_page', views.forum_page, name="forum_page"),
                  url(r'^index', views.index, name="home_page"),
                  url(r'^past_papers_page\?(.*)', views.past_papers_page),
                  url(r'^past_papers_page.html', views.past_papers_page, name="past_papers_page"),
                  url(r'^past_papers_page/?$', views.past_papers_page),
                  url(r'^problem_creation_page', views.problem_creation_page),
                  url(r'^question_comment_page', views.question_comment_page, name="question_comment_page"),
                  url(r'^question_solving_page\?(.*)', views.question_solving_page),
                  url(r'^question_solving_page.html', views.question_solving_page),
                  url(r'^question_solving_page/?$', views.question_solving_page, name="question_solving_page"),
                  url(r'^signup_page', views.signup_page),
                  url(r'^single_post_page', views.single_post_page),
                  url(r'^user_info_page', views.user_info_page, name="user_info_page"),
                  url(r'^start', views.start),
                  url(r'^start_c_1', views.start_c_1),
                  url(r'^start_with_pages', views.start_with_pages),
                  url(r'^expand', views.expand),
                  url(r'^Other', views.Other),
                  url(r'^reload', views.reload),
                  url(r'^$', views.landing),
                  # Specifically for ajax requests, does not serve html web page
                  url(r'^run_code/$', views.run_code),
                  url(r'^save_code/$', views.save_code),
                  url(r'^past_paper_update_progress/$', views.past_paper_update_progress),
                  url(r'^record_current_question/$', views.record_current_question),
                  url(r'^save_comment/$', views.save_edited_comment),
                  url(r'^delete_comment/$', views.delete_comment),
                  url(r'^comment_detail', views.comment_detail),
                  url(r'^register_problem_vote/$', views.register_problem_vote),
                  url(r'^register_comment_vote/$', views.register_comment_vote),
                  url(r'^save_editor_settings/$', views.save_editor_settings),
                  url(r'^random_problem', views.random_problem),
                  url(r'^password/$', views.change_password, name='change_password'),
                  # path('change-password/', auth_views.PasswordChangeView.as_view(template_name='home/user_info_page.html')),
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = 'home.views.page_not_found_view'
handler500 = 'home.views.server_error_view'
