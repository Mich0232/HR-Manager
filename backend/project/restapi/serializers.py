from django.contrib.auth.models import User, Group
from rest_framework import serializers
from . import models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'date_joined', 'first_name', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'name', 'surname','position', 'age', 'created_at', 'started_at', 'vacation_days', 'vacation_days_left')
        model = models.Employees