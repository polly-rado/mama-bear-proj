from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import FeedLog, SleepLog, ActivityLog
from .serializers import FeedLogSerializer, SleepLogSerializer, ActivityLogSerializer
import requests
from django.http import JsonResponse

class FeedLogListCreateView(APIView):
    def get(self, request):
        feed_logs = FeedLog.objects.all()
        serialized_feed_logs = FeedLogSerializer(feed_logs, many=True)
        return Response(serialized_feed_logs.data)

    def post(self, request):
        new_feed_log = FeedLogSerializer(data=request.data)
        if new_feed_log.is_valid():
            new_feed_log.save()
            return Response(new_feed_log.data, status=status.HTTP_201_CREATED)
        return Response(new_feed_log.errors, status=status.HTTP_400_BAD_REQUEST)

class FeedLogDetailView(APIView):
    def get(self, request, id):
        feed_log = FeedLog.objects.get(id=id)
        serialized_feed_log = FeedLogSerializer(feed_log)
        return Response(serialized_feed_log.data)

    def put(self, request, id):
        feed_log = FeedLog.objects.get(id=id)
        updated_feed_log = FeedLogSerializer(feed_log, data=request.data)
        if updated_feed_log.is_valid():
            updated_feed_log.save()
            return Response(updated_feed_log.data)
        return Response(updated_feed_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        feed_log = FeedLog.objects.get(id=id)
        feed_log.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class SleepLogListCreateView(APIView):
    def get(self, request):
        sleep_logs = SleepLog.objects.all()
        serialized_sleep_logs = SleepLogSerializer(sleep_logs, many=True)
        return Response(serialized_sleep_logs.data)

    def post(self, request):
        new_sleep_log = SleepLogSerializer(data=request.data)
        if new_sleep_log.is_valid():
            new_sleep_log.save()
            return Response(new_sleep_log.data, status=status.HTTP_201_CREATED)
        return Response(new_sleep_log.errors, status=status.HTTP_400_BAD_REQUEST)

class SleepLogDetailView(APIView):
    def get(self, request, id):
        sleep_log = SleepLog.objects.get(id=id)
        serialized_sleep_log = SleepLogSerializer(sleep_log)
        return Response(serialized_sleep_log.data)

    def put(self, request, id):
        sleep_log = SleepLog.objects.get(id=id)
        updated_sleep_log = SleepLogSerializer(sleep_log, data=request.data)
        if updated_sleep_log.is_valid():
            updated_sleep_log.save()
            return Response(updated_sleep_log.data)
        return Response(updated_sleep_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        sleep_log = SleepLog.objects.get(id=id)
        sleep_log.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ActivityLogListCreateView(APIView):
    def get(self, request):
        activity_logs = ActivityLog.objects.all()
        serialized_activity_logs = ActivityLogSerializer(activity_logs, many=True)
        return Response(serialized_activity_logs.data)

    def post(self, request):
        new_activity_log = ActivityLogSerializer(data=request.data)
        if new_activity_log.is_valid():
            new_activity_log.save()
            return Response(new_activity_log.data, status=status.HTTP_201_CREATED)
        return Response(new_activity_log.errors, status=status.HTTP_400_BAD_REQUEST)

class ActivityLogDetailView(APIView):
    def get(self, request, id):
        activity_log = ActivityLog.objects.get(id=id)
        serialized_activity_log = ActivityLogSerializer(activity_log)
        return Response(serialized_activity_log.data)

    def put(self, request, id):
        activity_log = ActivityLog.objects.get(id=id)
        updated_activity_log = ActivityLogSerializer(activity_log, data=request.data)
        if updated_activity_log.is_valid():
            updated_activity_log.save()
            return Response(updated_activity_log.data)
        return Response(updated_activity_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        activity_log = ActivityLog.objects.get(id=id)
        activity_log.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def get_weather_data(request):
    url = 'https://api.openweathermap.org/data/2.5/weather'
    params = {
        'q': 'Chicago',
        'appid': 'ec1fcdf7eb0af1cd8c133b1088e01163',
        'units': 'imperial',
    }
    response = requests.get(url, params=params)
    data = response.json()

    return JsonResponse(data)
