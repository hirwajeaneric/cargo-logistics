from fnmatch import fnmatchcase
from django.db import models

class Users(models.Model):
  fname = models.CharField(max_length=255)
  lname = models.CharField(max_length=255)
  gender = models.CharField(max_length=8)
  email = models.CharField(max_length=255)
  username = models.CharField(max_length=255)
  phone = models.IntegerField()
  passwd = models.CharField(max_length=255)