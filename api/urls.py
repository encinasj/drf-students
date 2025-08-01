from django.urls import path
from . import views

urlpatterns = [
    #Studens Url´s
    path('students/', views.studentsView),
    path('students/<int:pk>/', views.studenDetaillView),

    #Employees Url´s
    path('employees/', views.Employees.as_view()),

]