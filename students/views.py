from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Students


# Create your views here.
def students(request):
    students = Students.objects.all()
    students_list = list(students.values())
    return JsonResponse(students_list, safe=False)