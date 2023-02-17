from django import forms
from django.core.exceptions import ValidationError
from properties.models import Property, Amenities, Review, Booking


class PropertyForm(forms.ModelForm):
    class Meta:
        model = Property
        exclude = []


class AmenitiesForm(forms.ModelForm):
    class Meta:
        model = Amenities
        exclude = []


class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        exclude = []


class BookingForm(forms.ModelForm):

    class Meta:
        model = Booking
        exclude = []
