from pyexpat import model
#from django.contrib.auth.models import User
from .models import *
from rest_framework import serializers,validators

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=('username','password','email','first_name','last_name')

        extra_kwargs= {
            "password":{"write_only":True},
            "email":{
                "required":True,
                "allow_blank":False,
                "validators":[
                    validators.UniqueValidator(
                        User.objects.all(),"A user with that emaail already exists"
                    )
                ]
            }
        }

    def create(self, validated_data):
        username=validated_data.get('username')
        password=validated_data.get('password')
        email=validated_data.get('email')
        first_name=validated_data.get('first_name')
        last_name=validated_data.get('last_name')
        

        user=User.objects.create(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        user.is_admin=False
        user.is_stuff=False
        user.set_password(password)
        user.save()
        
        return user

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'                
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'
        
class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model=Enquiry
        fields='__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'  
        
        

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model=Company
        fields='__all__'  
        
           