# Generated by Django 4.1.7 on 2023-02-17 08:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_userdata_username'),
        ('properties', '0003_amenities_property'),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='user',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, to='user.userdata'),
            preserve_default=False,
        ),
    ]
