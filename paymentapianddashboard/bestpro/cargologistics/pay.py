import math
import random
import requests


def process_payment(pay, name, email):
    hed = {'Authorization': 'Bearer ' + 'FLWSECK-079a0295e0f1b668481090823ed35a81-X'}
    data = {
        "tx_ref": '' + str(math.floor(1000000 + random.random() * 9000000)),
        "amount":pay,
        "currency": "RWF",
        "redirect_url": "http://localhost:8000/",
        # "redirect_url": myurl(request=request),
        "payment_options": "mobilemoneyrwanda",
        "meta": {
            "consumer_id": 23,
            "consumer_mac": "92a3-912ba-1192a"
        },
        "customer": {
            "email": email,
            "phonenumber": "0788494084",
            "name": name
        },
        "customizations": {
            "title": "Cargo Logistics",
            "description": "Company Descriptions",
            "logo": "https://mail.pmg.co.rw/logo-2.png"
        }
    }
    url = 'https://api.flutterwave.com/v3/payments'
    response = requests.post(url, json=data, headers=hed)
    response = response.json()
    # print('==== meee ==============', myurl(request))
    print('=============== response==============', response)
    link = response['data']['link']
    return link