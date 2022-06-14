from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .models import Users
from tkinter import *  
from tkinter import messagebox  
from cargologistics.pay import process_payment
from django.shortcuts import redirect, render
from django.views.decorators.csrf import csrf_exempt


def index(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def transfer(request):
  template = loader.get_template('registrationForm.html')
  return HttpResponse(template.render())

def adduser(request):
  usera = request.POST['fname']
  userb = request.POST['lname']
  userc = request.POST['gender']
  userd = request.POST['email']
  usere = request.POST['username']
  userf = request.POST['phone']
  userg = request.POST['cpasswd']
  userh = request.POST['spasswd']
  if userg == userh:
    userssave = Users(fname=usera, lname=userb, gender=userc, email=userd, username=usere, phone=userf, passwd=userg)
    userssave.save()
  else:
     messagebox.showerror("Error",""" The Password are not matching """)
    
  return HttpResponseRedirect(reverse('index'))

@csrf_exempt
def payment(request):
      a = request.POST['kgs']
      b = request.POST['category']
      name = request.POST['name']
      email = request.POST['email']

      if b == 'Ocean':
         pay = a * 100
      else:
        pay = a * 30
      return redirect(process_payment(pay, name, email))