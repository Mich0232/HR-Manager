from django.urls import path

from . import views

urlpatterns = [
    path('employees/', views.EmployeesViewSet.as_view()),
    path('employees/<int:pk>/', views.EmployeeDetailsViewSet.as_view()),
    path('employees/add/', views.EmployeeCreateViewSet.as_view()),
]