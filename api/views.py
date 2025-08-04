#from django.shortcuts import render
#from django.http import JsonResponse
from django.http import Http404
from students.models import Students
from .serializers import StudentSerializer, EmployeeSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from employees.models import Employee
from rest_framework.decorators import api_view ##renderer_classes
#from rest_framework.renderers import JSONRenderer


#get list of registers and post or create a new register
@api_view(['GET','POST']) #When we use this decorator in our functions the function can use only the specific methods
#@renderer_classes([JSONRenderer])  # <-- Decorador clave
def studentsView(request):
    if request.method == 'GET':
        #Get all the data from Student table
        student = Students.objects.all()
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#Get details and Update an spesific register
@api_view(['GET', 'PUT','DELETE']) #When we use this decorator in our functions the function can use only the specific methods
def studenDetaillView(request, pk):
    try:
        student = Students.objects.get(pk=pk)
    except Students.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#class

class Employees(APIView):
    def get (self,request):
        employees = Employee.objects.all()
        serializer =  EmployeeSerializer(employees, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post (self,request):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class EmployeeDetail(APIView):
    def get_object(self,pk):
        try:
            return Employee.objects.get(pk=pk)
        except Employee.DoesNotExist:
            raise Http404
    def get(self,request,pk):
        employee = self.get_object(pk)
        serializer=EmployeeSerializer(employee)
        return Response(serializer.data, status=status.HTTP_200_OK)
