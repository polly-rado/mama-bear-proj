# Generated by Django 5.1 on 2024-08-21 04:07

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('child_app', '0004_rename_user_id_child_user_alter_child_allergies'),
        ('log_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='milestonelog',
            name='child_id',
        ),
        migrations.RemoveField(
            model_name='activitylog',
            name='child_id',
        ),
        migrations.RemoveField(
            model_name='feedlog',
            name='child_id',
        ),
        migrations.RemoveField(
            model_name='sleeplog',
            name='child_id',
        ),
        migrations.AddField(
            model_name='activitylog',
            name='child',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='activity_logs', to='child_app.child'),
        ),
        migrations.AddField(
            model_name='feedlog',
            name='child',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='feed_logs', to='child_app.child'),
        ),
        migrations.AddField(
            model_name='sleeplog',
            name='child',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sleep_logs', to='child_app.child'),
        ),
        migrations.AlterField(
            model_name='activitylog',
            name='notes',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='feedlog',
            name='notes',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='sleeplog',
            name='notes',
            field=models.TextField(blank=True),
        ),
        migrations.DeleteModel(
            name='DiaperLog',
        ),
        migrations.DeleteModel(
            name='MilestoneLog',
        ),
    ]