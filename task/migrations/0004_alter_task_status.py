# Generated by Django 4.1.7 on 2023-03-04 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_alter_task_status_alter_task_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('Created', 'Crd'), ('In progress', 'Pgs'), ('Finished', 'Fin'), ('Canceled', 'Cnc'), ('Expired', 'Exp')], default='Created', max_length=150),
        ),
    ]
