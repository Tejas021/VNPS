from django.db import models
from rest_framework import serializers
from .models import PoliceComplain, FireComplain, MedicalComplain
from rest_framework_jwt.settings import api_settings

from django.contrib.auth.models import User


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


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'id')


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password', 'id')
