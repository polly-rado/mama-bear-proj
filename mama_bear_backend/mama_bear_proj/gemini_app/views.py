import google.generativeai as genai
from django.http import JsonResponse
from django.conf import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

def get_gemini_response(request):
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = request.GET.get("prompt", "Tell me a story")
    response = model.generate_content(prompt)
    return JsonResponse(response.text, safe=False)

