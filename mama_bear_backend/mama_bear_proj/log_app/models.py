from django.db import models
from child_app.models import Child

class DiaperLog(models.Model):
    child_id = models.ForeignKey(Child, on_delete=models.CASCADE, related_name = 'diaperlogs')
    type = models.CharField(max_length=255)
    date_and_time = models.DateTimeField()
    notes = models.TextField()

    def __str__(self):
        return f"Diaper Log for {self.child.name} on {self.date_and_time}"

class FeedLog(models.Model):
    child_id = models.ForeignKey(Child, on_delete=models.CASCADE, related_name='feedlogs')
    type = models.CharField(max_length=255)
    amount = models.CharField(max_length=255)
    date_and_time = models.DateTimeField()
    notes = models.TextField()

    def __str__(self):
        return f"Feed Log for {self.child.name} on {self.date_and_time}"
    
class SleepLog(models.Model):
    child_id = models.ForeignKey(Child, on_delete=models.CASCADE, related_name='sleeplogs')
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    notes = models.TextField()

    def __str__(self):
        return f"Sleep Log for {self.child.name} from {self.start_time} to {self.end_time}"

class MilestoneLog(models.Model):
    child_id = models.ForeignKey(Child, on_delete=models.CASCADE, related_name='milestonelogs')
    milestone = models.CharField(max_length=255)
    date = models.DateField()
    notes = models.TextField()

    def __str__(self):
        return f"Milestone Log for {self.child.name} on {self.date}"

class ActivityLog(models.Model):
    child_id = models.ForeignKey(Child, on_delete=models.CASCADE, related_name='activitylogs')
    activity = models.CharField(max_length=255)
    date = models.DateField()
    notes = models.TextField()

    def __str__(self):
        return f"Activity Log for {self.child.name} on {self.date}"
