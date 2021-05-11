from django.db import models
from rest_framework import serializers
from .models import PoliceComplain


class PoliceComplainSerializer(serializers.ModelSerializer):
    class Meta:
        model = PoliceComplain
        fields = "__all__"
