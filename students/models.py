from django.db import models

# Create your models here.
class Students(models.Model):
    students_id = models.CharField()
    name = models.CharField(max_length=50)
    branch = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    