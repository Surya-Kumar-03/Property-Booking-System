from django import forms
from user.models import UserData
from django.core.exceptions import ValidationError
import hashlib


def pass_hash(password, salt=True):
    return hashlib.sha256(password.encode("utf-8")).hexdigest().upper()


class UserDataForm(forms.ModelForm):
    def clean_first_name(self):
        first_name = self.cleaned_data.get('first_name', '')
        if first_name.isalpha() and first_name != '':
            return first_name
        else:
            raise ValidationError("First Name can only be Alphabet")

    def clean_last_name(self):
        last_name = self.cleaned_data.get('last_name', '')
        if last_name.isalpha() or last_name == '':
            return last_name
        else:
            raise ValidationError("Last Name can only be Alphabet")

    def clean_password(self):
        password = self.cleaned_data.get('password')
        if password is not None:
            return pass_hash(password)
        else:
            raise ValidationError('Please enter your password')

    class Meta:
        model = UserData
        exclude = []