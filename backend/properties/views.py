from django.shortcuts import render, HttpResponse
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from properties import forms
# Create your views here.
from .models import Property
from user.serializers import AccountSerializer
from properties.serializers import PropertySerializer
from functools import reduce
import operator
from django.db.models import Q


@api_view(['GET'])
def home(request):
    q = request.GET.get('q', None)
    if q is not None and q != '':
        q = q.strip()
        query = q.split(' ')
        asd = Q()
        for x in query:
            asd = asd | Q(title__icontains=x)
            asd = asd | Q(short_location__icontains=x)
            asd = asd | Q(address__icontains=x)
            asd = asd | Q(property_type__icontains=x)
        data = Property.objects.filter(asd)
    else:
        data = Property.objects.all()
    response = {
        'count': data.count(),
        'data': []
    }
    for d in data:
        print(request.build_absolute_uri(d.image))
        response['data'].append({
            'title': d.title,
            'short_address': d.short_location,
            'guest': d.guests,
            'type': d.property_type,
            'image': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            'price': d.price_per_night,
            'review': 4.3

        })
    return Response(response)




@api_view(['POST'])
def add_property(request):
    prop = forms.PropertyForm(data=request.POST.copy() or None)
    prop.user = 3
    prop.data["user"] = 3
    if prop.is_valid() and prop.clean():
        saved_data = prop.save()
        return Response({'status': 200, 'data': {'property': saved_data.pk}})
    return Response({'status': 404, 'errors': prop.errors})


@api_view(['POST'])
def add_review(request):
    review = forms.ReviewForm(request.POST or None)
    if review.is_valid() and review.clean():
        return Response({'status': 200, 'data': review.cleaned_data})
    return Response({'status': 404, 'errors': review.errors})


@api_view(['POST'])
def booking(request):
    book = forms.BookingForm(request.POST.copy() or None)
    book.data['user'] = 3
    if book.is_valid() and book.clean():
        save_data = book.save()
        response = {
            'property': save_data.property.title,
            'check_in_date': save_data.check_in_date,
            'check_out_date': save_data.check_out_date,
        }
        return Response({'status': 200, 'data': response})
    return Response({'status': 401, 'errors': book.errors})

