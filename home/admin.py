from django.contrib import admin
from home.models import PastPaper, Question
from forum.models import Post, Comment

# Register your models here.
@admin.register(PastPaper)
class PastPaperAdmin(admin.ModelAdmin):
    list_display = ['title', 'language', 'year', 'desc', 'difficulty', 'upvotes']

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['question_desc', 'code_segment','test_script']

class CodeSegmentAdmin(admin.ModelAdmin):
    list_display = ['index', 'code', 'paper']

