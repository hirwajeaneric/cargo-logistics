from django.db import router
from cargo.viewsets import *
from rest_framework import routers


router=routers.DefaultRouter()
router.register('category',CategoryViewset)
router.register('product',ProductViewset)
router.register('enquiry',EnquiryViewset)
router.register('review',ReviewViewset)
router.register('Company',CompanyViewset)