from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Employees
from .helpers import days_till_bday


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
        fields = ('id', 'name', 'surname','position', 'age', 'birthday', 'created_at', 'started_at', 'vacation_days', 'vacation_days_left')
        model = Employees


class EmployeesBirthdaysSerializer(serializers.ModelSerializer):
    days_till_bday = serializers.SerializerMethodField(read_only=True)

    class Meta:
        fields = ('id', 'name', 'surname', 'age', 'birthday', 'days_till_bday')
        model = Employees

    def get_days_till_bday(self, instance):
        return days_till_bday(instance.birthday)
