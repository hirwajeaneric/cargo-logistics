from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.index, name='index'),
    path('transfer/', views.transfer, name='transfer'),
    path('transfer/payment/', views.payment, name='payment'),
    
]