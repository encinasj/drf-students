from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    # web applications endpoints
    path('students/', include('students.urls')),

    # API Endpoints
    path('api/v1/', include('api.urls'))
]
