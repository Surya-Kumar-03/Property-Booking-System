# Generated by Django 4.1.7 on 2023-02-17 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0004_property_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='image',
            field=models.ImageField(default='/default.png', upload_to='images/'),
            preserve_default=False,
        ),
    ]