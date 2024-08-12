from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import DiaperLog, FeedLog, SleepLog, MilestoneLog, ActivityLog
from .serializers import DiaperLogSerializer, FeedLogSerializer, SleepLogSerializer, MilestoneLogSerializer, ActivityLogSerializer

class DiaperLogListCreateView(APIView):
    def get(self, request):
        diaper_logs = DiaperLog.objects.all()
        serialized_diaper_logs = DiaperLogSerializer(diaper_logs, many=True)
        return Response(serialized_diaper_logs.data)

    def post(self, request):
        new_diaper_log = DiaperLogSerializer(data=request.data)
        if new_diaper_log.is_valid():
            new_diaper_log.save()
            return Response(new_diaper_log.data, status=status.HTTP_201_CREATED)
        return Response(new_diaper_log.errors, status=status.HTTP_400_BAD_REQUEST)

class DiaperLogDetailView(APIView):
    def get(self, request, id):
        diaper_log = get_object_or_404(DiaperLog, id=id)
        serialized_diaper_log = DiaperLogSerializer(diaper_log)
        return Response(serialized_diaper_log.data)

    def put(self, request, id):
        diaper_log = get_object_or_404(DiaperLog, id=id)
        updated_diaper_log = DiaperLogSerializer(diaper_log, data=request.data, partial=True)
        if updated_diaper_log.is_valid():
            updated_diaper_log.save()
            return Response(updated_diaper_log.data)
        return Response(updated_diaper_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        diaper_log = get_object_or_404(DiaperLog, id=id)
        diaper_log.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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
        feed_log = get_object_or_404(FeedLog, id=id)
        serialized_feed_log = FeedLogSerializer(feed_log)
        return Response(serialized_feed_log.data)

    def put(self, request, id):
        feed_log = get_object_or_404(FeedLog, id=id)
        updated_feed_log = FeedLogSerializer(feed_log, data=request.data, partial=True)
        if updated_feed_log.is_valid():
            updated_feed_log.save()
            return Response(updated_feed_log.data)
        return Response(updated_feed_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        feed_log = get_object_or_404(FeedLog, id=id)
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
        sleep_log = get_object_or_404(SleepLog, id=id)
        serialized_sleep_log = SleepLogSerializer(sleep_log)
        return Response(serialized_sleep_log.data)

    def put(self, request, id):
        sleep_log = get_object_or_404(SleepLog, id=id)
        updated_sleep_log = SleepLogSerializer(sleep_log, data=request.data, partial=True)
        if updated_sleep_log.is_valid():
            updated_sleep_log.save()
            return Response(updated_sleep_log.data)
        return Response(updated_sleep_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        sleep_log = get_object_or_404(SleepLog, id=id)
        sleep_log.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MilestoneLogListCreateView(APIView):
    def get(self, request):
        milestone_logs = MilestoneLog.objects.all()
        serialized_milestone_logs = MilestoneLogSerializer(milestone_logs, many=True)
        return Response(serialized_milestone_logs.data)

    def post(self, request):
        new_milestone_log = MilestoneLogSerializer(data=request.data)
        if new_milestone_log.is_valid():
            new_milestone_log.save()
            return Response(new_milestone_log.data, status=status.HTTP_201_CREATED)
        return Response(new_milestone_log.errors, status=status.HTTP_400_BAD_REQUEST)

class MilestoneLogDetailView(APIView):
    def get(self, request, id):
        milestone_log = get_object_or_404(MilestoneLog, id=id)
        serialized_milestone_log = MilestoneLogSerializer(milestone_log)
        return Response(serialized_milestone_log.data)

    def put(self, request, id):
        milestone_log = get_object_or_404(MilestoneLog, id=id)
        updated_milestone_log = MilestoneLogSerializer(milestone_log, data=request.data, partial=True)
        if updated_milestone_log.is_valid():
            updated_milestone_log.save()
            return Response(updated_milestone_log.data)
        return Response(updated_milestone_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        milestone_log = get_object_or_404(MilestoneLog, id=id)
        milestone_log.delete()
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
        activity_log = get_object_or_404(ActivityLog, id=id)
        serialized_activity_log = ActivityLogSerializer(activity_log)
        return Response(serialized_activity_log.data)

    def put(self, request, id):
        activity_log = get_object_or_404(ActivityLog, id=id)
        updated_activity_log = ActivityLogSerializer(activity_log, data=request.data, partial=True)
        if updated_activity_log.is_valid():
            updated_activity_log.save()
            return Response(updated_activity_log.data)
        return Response(updated_activity_log.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        activity_log = get_object_or_404(ActivityLog, id=id)
        activity_log.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
