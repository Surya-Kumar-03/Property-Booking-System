from django.db import models
from user.models import UserData
# Create your models here.


class Property(models.Model):
    property_type_choices = (
        (1, 'Hotel'),
        (2, 'Bungalow'),
        (3, 'Flat'),
        (4, 'PG'),
    )

    title = models.CharField(max_length=30)
    short_location = models.CharField(max_length=50)
    price_per_night = models.IntegerField()
    guests = models.IntegerField()
    bedroom = models.IntegerField()
    property_type = models.PositiveIntegerField(choices=property_type_choices, default=1)
    address = models.TextField()
    check_in_time = models.TimeField(blank=False)
    check_out_time = models.TimeField(blank=False)
    user = models.ForeignKey(UserData, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"{self.title} ({self.short_location})"


class Amenities(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    kitchen = models.BooleanField(default=True)
    wifi = models.BooleanField(default=True)
    dedicated_work_space = models.BooleanField(default=True)
    pool = models.BooleanField(default=True)
    ac = models.BooleanField(default=True)
    parking = models.BooleanField(default=True)
    TV = models.BooleanField(default=True)
    balcony = models.BooleanField(default=True)
    view = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.property.title}"


class Review(models.Model):
    review_choices = (
        (1, '1 Star'),
        (2, '2 Star'),
        (3, '3 Star'),
        (4, '4 Star'),
        (5, '5 Star'),
    )
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    text = models.TextField(blank=False, null=False)
    review = models.IntegerField(choices=review_choices)
    user = models.ForeignKey(UserData, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.property.title} - {self.review}"


class Booking(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    check_in_date = models.DateField(null=False, blank=False)
    check_out_date = models.DateField(null=False, blank=False)
    user = models.ForeignKey(UserData, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.property.title} ({self.check_in_date} - {self.check_out_date})"