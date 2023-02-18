from rest_framework import serializers
from . import models


class AccountSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.UserData
		fields = ['username', 'first_name', 'last_name']


