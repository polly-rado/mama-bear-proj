from rest_framework import serializers
from .models import Child

class ChildSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Child
        fields = ['id', 'user_id', 'name', 'birthday', 'blood_type', 'allergies']

