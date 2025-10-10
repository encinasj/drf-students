import django_filters
from .models import Employee

class EmployeeFilter(django_filters.FilterSet):
    designations = django_filters.CharFilter(field_name='designations',lookup_expr='icontains')
    emp_name = django_filters.CharFilter(field_name='emp_name',lookup_expr='icontains')

    #Filter by id employee range
    id_min = django_filters.CharFilter(method='filter_by_id_range', label='From emp id')
    id_max = django_filters.CharFilter(method='filter_by_id_range', label='To emp id')

    class Meta:
        model = Employee
        fields = ['designations','emp_name', 'id_min', 'id_max']
    
    def filter_by_id_range(self, queryset, name, value):
        if name == 'id_min':
            return queryset.filter(emp_id__gte=value)
        elif name == 'id_max':
            return queryset.filter(emp_id__lte=value)
        return queryset