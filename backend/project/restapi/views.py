from django.contrib.auth.models import User, Group
from .models import Employees
from rest_framework import viewsets
from rest_framework import generics
from restapi.serializers import UserSerializer, GroupSerializer, EmployeesSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class EmployeesViewSet(generics.ListAPIView):
    """
    API endpoint that allows employees to be viewed or edited.
    """
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer
