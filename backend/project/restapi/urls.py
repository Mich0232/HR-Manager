from django.urls import path

from . import views

urlpatterns = [
    path('employees/', views.EmployeesViewSet.as_view(), name='employees'),
    path('employees/<int:pk>/', views.EmployeeDetailsViewSet.as_view(), name='employees_details'),
    path('employees/add/', views.EmployeeCreateViewSet.as_view(), name='employees_add'),
    path('employees/birthdays/', views.EmployeesBirthdaysViewSet.as_view(), name='employees_birthdays'),
]