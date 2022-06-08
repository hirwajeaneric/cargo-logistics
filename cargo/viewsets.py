from rest_framework import viewsets
from . import models
from . import serializers

 
class CategoryViewset(viewsets.ModelViewSet):
    queryset=models.Category.objects.all()
    serializer_class=serializers.CategorySerializer
    
class ProductViewset(viewsets.ModelViewSet):
    queryset=models.Product.objects.all()
    serializer_class=serializers.ProductSerializer
    
class EnquiryViewset(viewsets.ModelViewSet):
    queryset=models.Enquiry.objects.all()
    serializer_class=serializers.EnquirySerializer            
    
class ReviewViewset(viewsets.ModelViewSet):
    queryset=models.Review.objects.all()
    serializer_class=serializers.ReviewSerializer    
    
 
 
 
class CompanyViewset(viewsets.ModelViewSet):
    queryset=models.Company.objects.all()
    serializer_class=serializers.CompanySerializer  
      
    
      
