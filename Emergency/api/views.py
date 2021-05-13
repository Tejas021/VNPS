from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, PoliceComplainSerializer, MedicalComplainSerializer, FireComplainSerializer
from .models import PoliceComplain, MedicalComplain, FireComplain


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PoliceEmergency(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = PoliceComplainSerializer

    lookup_url_kwargs = 'user'

    def get(self, request, format=None):
        data1 = []
        user = request.GET.get(self.lookup_url_kwargs)

        data = PoliceComplain.objects.filter(user=user)
        for i in data:
            data1.append(PoliceComplainSerializer(i).data)

        return Response(data1, status=status.HTTP_200_OK)


class FireEmergency(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = FireComplainSerializer

    lookup_url_kwargs = 'user'

    def get(self, request, format=None):
        data1 = []
        user = request.GET.get(self.lookup_url_kwargs)

        data = FireComplain.objects.filter(user=user)
        for i in data:
            data1.append(FireComplainSerializer(i).data)

        return Response(data1, status=status.HTTP_200_OK)


class MedicalEmergency(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MedicalComplainSerializer

    lookup_url_kwargs = 'user'

    def get(self, request, format=None):
        data1 = []
        user = request.GET.get(self.lookup_url_kwargs)

        data = MedicalComplain.objects.filter(user=user)
        for i in data:
            data1.append(MedicalComplainSerializer(i).data)

        return Response(data1, status=status.HTTP_200_OK)
