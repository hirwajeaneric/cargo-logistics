import json
from django.test import TestCase

from rest_framework.test import APIRequestFactory

# Using the standard RequestFactory API to create a form POST request

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase



#/////////////////////////////////////////////////////////////////////////////////
def test_Update_account(self):
        factory = APIRequestFactory()
        request_post = factory.post('http://127.0.0.1:8001/api/category/', json.dumps({'name': 'Airplane'}), content_type='application/json')
        request_put = factory.put('http://127.0.0.1:8001/api/category/1/', json.dumps({'name': 'Track'}), content_type='application/json')
        self.assertEqual(request_put.status_code, status.HTTP_200_OK)
        self.assertEqual(len(request_put.data), 1)
        self.assertEqual(request_post.status_code, status.HTTP_200_OK)
        self.assertEqual(len(request_post.data), 1)
        response = self.client.get('http://127.0.0.1:8001/api/category/1/')
        self.assertEqual(json.loads(response.content), {'id': 4, 'username': 'lauren'})

# from rest_framework.test import force_authenticate

# factorys = APIRequestFactory()
# user = User.objects.get(username='olivia')
# view = AccountDetail.as_view()

# # Make an authenticated request to the view...
# request = factorys.get('/accounts/django-superstars/')
# force_authenticate(request, user=user)
# response = view(request)


# # Request will only authenticate if `SessionAuthentication` is in use.
# request = factorys.get('/accounts/django-superstars/')
# request.user = user
# response = view(request)


