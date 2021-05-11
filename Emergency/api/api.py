from rest_framework import viewsets, permissions
from .serializers import PoliceComplainSerializer
from .models import PoliceComplain


class PoliceComplainViewSet(viewsets.ModelViewSet):
    queryset = PoliceComplain.objects.all()

    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = PoliceComplainSerializer
