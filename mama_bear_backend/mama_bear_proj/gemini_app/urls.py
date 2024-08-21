from django.urls import path
from .views import get_gemini_response, get_daily_suggestions

urlpatterns = [
    path('gemini-response/', get_gemini_response, name='gemini-response'),
    path('daily-suggestions/', get_daily_suggestions, name='daily-suggestions'),  # New endpoint
]
