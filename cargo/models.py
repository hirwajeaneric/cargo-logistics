from django.db import models
from django.contrib.auth.models import User
# Create your models here.





class Company(models.Model):
    company_id = models.IntegerField(default=0, blank=True, null=True)
    company_name = models.CharField(max_length=500)
    employee_code=models.CharField(max_length=500)
    employee_name=models.CharField(max_length=500)

    def __str__(self):
        return self.company_name



class Category(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True, default='')
    def __str__(self):
        return self.name
 


class Product(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField(null=True, blank=True, default='')
    quantity = models.IntegerField(default=0, null=True, blank=True)
    is_complete = models.BooleanField(default=False)
    date_D = models.DateTimeField(auto_now_add=True)
    product_Code = models.CharField(max_length=5, unique=True)
    def __str__(self):
        return self.pro_Code

class Enquiry(models.Model):
    product=models.ForeignKey(Product,on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=500)
    company = models.ForeignKey(Company, on_delete=models.SET_NULL,blank=True, null=True)
    date_Arriv = models.DateTimeField()
    date_dep = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.Enq_Code

class Review(models.Model):
    users = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    comment_customer = models.CharField(max_length=500)
    def __str__(self):
        return self.product.name + " review" + " by " + self.customer.name

  