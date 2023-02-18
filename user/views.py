from django.shortcuts import render, HttpResponse
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
import hashlib
from . import forms
from . import serializers
from user.models import UserData


def pass_hash(password, salt=True):
    return hashlib.sha256(password.encode("utf-8")).hexdigest().upper()


@api_view(['POST'])
def login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    if password is not None and username is not None:
        match = UserData.objects.filter(username=username, password=pass_hash(password))
        if match.exists():
            response = {
                'status': 200,
                'token': match.first().pk,
            }
        else:
            response = {
                'status': 401,
                'token': -1,
                'errors': {
                    'username': ['Username or password is not correct'],
                    'password': ['username or password is not correct'],
                },
            }
    else:
        response = {
            'status': 401,
            'errors': {
                'username': ['Please enter your username'],
                'password': ['Please enter your password'],
            },
        }
    return Response(response)


@api_view(['POST'])
def register(request):
    user = forms.UserDataForm(request.POST or None)
    if user.is_valid() and user.clean():
        saved_user = user.save()
        return Response({
            'status': 200,
            'data': {
                'username': saved_user.username,
                'email': saved_user.email
            },
            'message': 'User Register Successfully',
            'token': saved_user.pk
        })
    return Response({'response': 404, 'message': 'Registration Failed', 'errors': user.errors})


