import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hotel_rental.settings')
django.setup()

from django.contrib.auth import get_user_model
from user import forms


def main():
    User = get_user_model()
    username = os.environ.get('username', default='admin')
    password = os.environ.get('password', default='admin')
    user = User.objects.create_user(username, password=password)
    user.is_superuser = True
    user.is_staff = True
    user.save()
    print(f"super user created with username: '{username}' and password: '{password}'")
    user = forms.UserDataForm({
        'username': 'admin',
        'email': 'dummy_email@gmail.com',
        'password': 'admin',
        'first_name': 'Aryan',
        'last_name': 'Amish',
    })
    if user.is_valid() and user.clean():
        saved_user = user.save()
        print(f"test user created with username: 'admin', password: 'admin'")


if __name__ == '__main__':
    main()