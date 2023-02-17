from django.contrib import admin
from properties import models


# Register your models here.
admin.site.register(models.Review)
admin.site.register(models.Booking)
admin.site.register(models.Property)
admin.site.register(models.Amenities)
