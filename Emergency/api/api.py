from rest_framework import viewsets, permissions
from .serializers import PoliceComplainSerializer, MedicalComplainSerializer, FireComplainSerializer
from .models import PoliceComplain, MedicalComplain, FireComplain


class PoliceComplainViewSet(viewsets.ModelViewSet):
    queryset = PoliceComplain.objects.all()

    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = PoliceComplainSerializer


class FireComplainViewSet(viewsets.ModelViewSet):
    queryset = FireComplain.objects.all()

    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = FireComplainSerializer


class MedicalComplainViewSet(viewsets.ModelViewSet):
    queryset = MedicalComplain.objects.all()

    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = MedicalComplainSerializer
