import google.generativeai as genai
from django.http import JsonResponse
from django.conf import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

def get_gemini_response(request):
    prompt = request.GET.get("prompt", "Tell me a story")
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return JsonResponse(response.text, safe=False)

def get_daily_suggestions(request):
    model = genai.GenerativeModel("gemini-1.5-flash")

    # Generate daily activity ideas
    activity_prompt = "Give me some daily activity ideas for kids."
    activity_response = model.generate_content(activity_prompt)

    # Generate daily meal suggestions
    meal_prompt = "Give me some daily meal suggestions for kids."
    meal_response = model.generate_content(meal_prompt)

    # Combine responses
    suggestions = {
        "activities": activity_response.text,
        "meals": meal_response.text,
    }

    return JsonResponse(suggestions, safe=False)
