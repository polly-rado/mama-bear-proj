from django.urls import path
from .views import DiaperLogListCreateView, DiaperLogDetailView, \
                   FeedLogListCreateView, FeedLogDetailView, \
                   SleepLogListCreateView, SleepLogDetailView, \
                   MilestoneLogListCreateView, MilestoneLogDetailView, \
                   ActivityLogListCreateView, ActivityLogDetailView
from .views import get_weather_data


urlpatterns = [
    path('weather/', get_weather_data, name='get-weather-data'),
    
    path('diaper-logs/', DiaperLogListCreateView.as_view(), name='diaper-log-list-create'),
    path('diaper-logs/<int:id>/', DiaperLogDetailView.as_view(), name='diaper-log-detail'),

    path('feed-logs/', FeedLogListCreateView.as_view(), name='feed-log-list-create'),
    path('feed-logs/<int:id>/', FeedLogDetailView.as_view(), name='feed-log-detail'),

    path('sleep-logs/', SleepLogListCreateView.as_view(), name='sleep-log-list-create'),
    path('sleep-logs/<int:id>/', SleepLogDetailView.as_view(), name='sleep-log-detail'),

    path('milestone-logs/', MilestoneLogListCreateView.as_view(), name='milestone-log-list-create'),
    path('milestone-logs/<int:id>/', MilestoneLogDetailView.as_view(), name='milestone-log-detail'),

    path('activity-logs/', ActivityLogListCreateView.as_view(), name='activity-log-list-create'),
    path('activity-logs/<int:id>/', ActivityLogDetailView.as_view(), name='activity-log-detail'),
]
