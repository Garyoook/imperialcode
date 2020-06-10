from django.urls import path
from . import views
from .views import ForumCreate, ForumListView, ForumUserListView, ForumDetailView,\
    ForumUpdateView, ForumDeleteView, CommentCreateView, CommentUpdateView, CommentDeleteView

urlpatterns = [
    path('', ForumListView.as_view(), name='forum-list'),
    path('add/', ForumCreate.as_view(), name='forum-add'),
    path('by/<username>/', ForumUserListView.as_view(), name='forum-by'),
    path('edit/<int:pk>', ForumUpdateView.as_view(), name='forum-edit'),
    path('delete/<int:pk>', ForumDeleteView.as_view(), name='forum-delete'),
    path('<slug:slug>/', ForumDetailView.as_view(), name='forum-detail'),

## Commet path
    path('add-comment/<int:pk>', ForumDetailView.as_view(), name='add-comment'),
    path('edit-comment/<int:pk>', CommentUpdateView.as_view(), name='edit-comment'),
    path('delete-comment/<int:pk>', CommentDeleteView.as_view(), name='delete-comment'),
]
