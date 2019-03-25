from django.urls import path
from django.conf.urls import include, url

from . import views

urlpatterns = [
    path('', views.home),
    url('shop/', include("shop.urls")),
]
