from django.urls import path, include
from apps.linkr.views import home

urlpatterns = [
    path('', home, name='home')
]