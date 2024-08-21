from django.db import models
from user_app.models import User
from .validators import validate_blood_type
from django.core.validators import MinLengthValidator

class Child(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='children')
    name = models.CharField(max_length=255, validators=[MinLengthValidator(2)])
    birthday = models.DateField()
    blood_type = models.CharField(max_length=3, validators=[validate_blood_type])
    allergies = models.TextField(blank=True)

    def __str__(self):
        return self.name
