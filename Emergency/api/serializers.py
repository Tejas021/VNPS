from django.db import models
from rest_framework import serializers
from .models import PoliceComplain, FireComplain, MedicalComplain


class PoliceComplainSerializer(serializers.ModelSerializer):
    class Meta:
        model = PoliceComplain
        fields = "__all__"


class FireComplainSerializer(serializers.ModelSerializer):
    class Meta:
        model = FireComplain
        fields = "__all__"


class MedicalComplainSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalComplain
        fields = "__all__"
