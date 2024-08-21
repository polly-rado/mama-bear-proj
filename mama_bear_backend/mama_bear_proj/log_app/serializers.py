from rest_framework import serializers
from .models import FeedLog, SleepLog, ActivityLog

class FeedLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedLog
        fields = ['id', 'child', 'type', 'amount', 'date_and_time', 'notes']

class SleepLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = SleepLog
        fields = ['id', 'child', 'start_time', 'end_time', 'notes']

class ActivityLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityLog
        fields = ['id', 'child', 'activity', 'date', 'notes']