from django.contrib.auth.models import User, Group

from rest_framework import viewsets
from rest_framework import generics
from rest_framework import mixins
from rest_framework.response import Response

from .serializers import UserSerializer, GroupSerializer, EmployeesSerializer, EmployeesBirthdaysSerializer
from .models import Employees


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


class EmployeeDetailsViewSet(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows single employee to be viewed or edited.
    """
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer


class EmployeeCreateViewSet(generics.CreateAPIView):
    """
    API endpoint that allows employee to be created.
    """
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializer


class EmployeesBirthdaysViewSet(mixins.ListModelMixin,
                                generics.GenericAPIView):
    """
    API endpoint that allows see employees birthdays.
    """
    queryset = Employees.objects.all()
    serializer_class = EmployeesBirthdaysSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
