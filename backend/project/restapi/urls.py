from django.urls import path

from . import views

urlpatterns = [
    path('employees/', views.EmployeesViewSet.as_view()),
]