import django_filters
from .models import Employee

class EmployeeFilter(django_filters.FilterSet):
    designations = django_filters.CharFilter(field_name='designations',lookup_expr='icontains')

    class Meta:
        model = Employee
        fields = ['designations']