from rest_framework import serializers
from .models import DiaperLog, FeedLog, SleepLog, MilestoneLog, ActivityLog

class DiaperLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiaperLog
        fields = ['id', 'child_id', 'type', 'amount', 'date_and_time', 'notes']

class FeedLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedLog
        fields = ['id', 'child_id', 'type', 'amount', 'date_and_time', 'notes']

class SleepLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = SleepLog
        fields = ['id', 'child_id', 'start_time', 'end_time', 'notes']

class MilestoneLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = MilestoneLog
        fields = ['id', 'child_id', 'milestone', 'date', 'notes']

class ActivityLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityLog
        fields = ['id', 'child_id', 'activity', 'date', 'notes']