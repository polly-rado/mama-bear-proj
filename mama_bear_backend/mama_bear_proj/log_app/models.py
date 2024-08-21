from django.db import models
from child_app.models import Child

class FeedLog(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE, related_name='feed_logs', null=True, blank=True)
    type = models.CharField(max_length=255)
    amount = models.CharField(max_length=255)
    date_and_time = models.DateTimeField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"Feed Log for {self.child.name} on {self.date_and_time}"
    
class SleepLog(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE, related_name='sleep_logs',null=True, blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"Sleep Log for {self.child.name} from {self.start_time} to {self.end_time}"

class ActivityLog(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE, related_name='activity_logs', null=True, blank=True)
    activity = models.CharField(max_length=255)
    date = models.DateField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"Activity Log for {self.child.name} on {self.date}"
