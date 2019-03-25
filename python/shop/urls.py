from django.urls import path

from . import views

urlpatterns = [
    path('add_classify/', views.add_classify),
    path('get_classify/', views.get_classify)
]
