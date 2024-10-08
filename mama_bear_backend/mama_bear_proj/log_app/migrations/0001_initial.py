# Generated by Django 5.1 on 2024-08-08 20:58

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('child_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ActivityLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('notes', models.TextField()),
                ('child_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='activitylogs', to='child_app.child')),
            ],
        ),
        migrations.CreateModel(
            name='DiaperLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
                ('date_and_time', models.DateTimeField()),
                ('notes', models.TextField()),
                ('child_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='diaperlogs', to='child_app.child')),
            ],
        ),
        migrations.CreateModel(
            name='FeedLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
                ('amount', models.CharField(max_length=255)),
                ('date_and_time', models.DateTimeField()),
                ('notes', models.TextField()),
                ('child_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='feedlogs', to='child_app.child')),
            ],
        ),
        migrations.CreateModel(
            name='MilestoneLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('milestone', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('notes', models.TextField()),
                ('child_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='milestonelogs', to='child_app.child')),
            ],
        ),
        migrations.CreateModel(
            name='SleepLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('notes', models.TextField()),
                ('child_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sleeplogs', to='child_app.child')),
            ],
        ),
    ]
