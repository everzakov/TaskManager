# Generated by Django 4.1.7 on 2023-03-04 13:48

from django.db import migrations, models
import task.models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0005_alter_task_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('CRD', 'Created'), ('PGS', 'In progress'), ('FIN', 'Finished'), ('CNC', 'Canceled'), ('EXP', 'Expired')], default=task.models.Task.TaskStatus['CREATED'], max_length=150),
        ),
    ]
