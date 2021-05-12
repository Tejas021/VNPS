from rest_framework import routers
from .api import PoliceComplainViewSet, FireComplainViewSet, MedicalComplainViewSet
from .views import current_user, UserList

from django.urls import path, include


router = routers.DefaultRouter()
router.register('policecomplain', PoliceComplainViewSet, '')
router.register('medicalcomplain', MedicalComplainViewSet, '')
router.register('firecomplain', FireComplainViewSet, '')

urlpatterns = [path('current_user/', current_user),
               path('users/', UserList.as_view())]
urlpatterns += router.urls
