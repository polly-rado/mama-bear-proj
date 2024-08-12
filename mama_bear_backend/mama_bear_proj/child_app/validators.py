from django.core.exceptions import ValidationError

def validate_blood_type(value):
    valid_blood_type = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    if value not in valid_blood_type:
        raise ValidationError(f'{value} is not a valid blood type.')