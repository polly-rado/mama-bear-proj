from django.urls import path
from .views import get_gemini_response

urlpatterns = [
    path('gemini-response/', get_gemini_response, name='gemini-response'),
]
