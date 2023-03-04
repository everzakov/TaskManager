from django.db import models
import datetime
from enum import Enum

# Create your models here.


class Task(models.Model):

    class TaskStatus(Enum):
        CREATED = ("CRD", 'Created')
        INPROGRESS = ("PGS", 'In progress')
        FINISHED = ("FIN", 'Finished')
        CANCELED = ("CNC", 'Canceled')
        EXPIRED = ("EXP", 'Expired')

        @classmethod
        def choices(cls):
            return tuple(i.value for i in cls)

        @classmethod
        def getStatusFromRaw(cls, st: str) -> str:
            for i in cls:
                if st == i.value[0]:
                    return i.value[1]
            return ""

    task_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, default="New Task")
    description = models.TextField(
        max_length=200, default="Awesome description")
    status = models.CharField(
        max_length=3,
        choices=TaskStatus.choices(),
        default=TaskStatus.CREATED
    )
    date = models.DateField("Date", default=datetime.date.today)

    def __str__(self) -> str:
        return f'name: {self.title} status: {self.TaskStatus.getStatusFromRaw(self.status)} date: {self.date}'
