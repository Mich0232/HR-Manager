from django.db import models


class Employees(models.Model):
    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    position = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    started_at = models.DateField(auto_now_add=True)
    vacation_days = models.IntegerField()
    vacation_days_left = models.IntegerField()

    def __str__(self):
        return f"{self.name} {self.surname} - {self.position}"
