from django.db import models

class Photo(models.Model):
    title = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='photos')
    date = models.DateField()

    def __str__(self):
        return self.title