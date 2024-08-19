from django.urls import path
from .views import UserListCreateView, UserDetailView, Sign_up, Log_in, Info, Log_out, Master_Sign_Up
from .views import test_connection


urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:id>/', UserDetailView.as_view(), name='user-detail'),
    path('sign_up/', Sign_up.as_view(), name='sign-up'),
    path('log_in/', Log_in.as_view(), name='log-in'),
    path('info/', Info.as_view(), name='user-info'),
    path('log_out/', Log_out.as_view(), name='log-out'),
    path('master/', Master_Sign_Up.as_view(), name='master'),
    path('test/', test_connection, name='test_connection'),
]
