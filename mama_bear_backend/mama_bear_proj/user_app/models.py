from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import EmailValidator

class User(AbstractUser):
    email = models.EmailField(
        unique=True, 
        validators=[EmailValidator(message="Enter a valid email address")],
    )
   
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    

