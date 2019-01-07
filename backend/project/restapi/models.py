from django.db import models
from datetime import datetime
from django.utils import timezone


class Employees(models.Model):

    POSITION_CHOICES = (
        ('developer','developer'),
        ('secretary','secretary'),
        ('business','business'),
    )

    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    position = models.CharField(max_length=20, choices=POSITION_CHOICES)
    @property
    def age(self):
        return timezone.now().year - self.birthday.year
    birthday = models.DateField(default=datetime.now)
    created_at = models.DateTimeField(auto_now_add=True)
    started_at = models.DateField(default=datetime.now)
    vacation_days = models.IntegerField(default=26)
    vacation_days_left = models.IntegerField(default=26)

    def __str__(self):
        return f"{self.name} {self.surname} - {self.position}"
