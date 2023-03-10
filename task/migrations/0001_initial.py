# Generated by Django 4.1.7 on 2023-03-04 13:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('task_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(default='New Task', max_length=50)),
                ('description', models.TextField(default='Awesome description', max_length=200)),
                ('status', models.CharField(choices=[('CRD', 'Created'), ('PGS', 'In progress'), ('FIN', 'Finished'), ('CNC', 'Canceled'), ('EXP', 'Expired')], default='CRD', max_length=150)),
                ('date', models.DateField(default=datetime.date.today, verbose_name='Date')),
            ],
        ),
    ]
