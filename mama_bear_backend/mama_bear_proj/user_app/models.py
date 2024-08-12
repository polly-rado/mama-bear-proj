from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import EmailValidator

class User(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255, 
        unique=True, 
        validators=[EmailValidator(message="Enter a valid email address")],
    )
   

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    

