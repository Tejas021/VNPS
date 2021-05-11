from rest_framework import routers
from .api import PoliceComplainViewSet, FireComplainViewSet, MedicalComplainViewSet

from django.urls import path, include


router = routers.DefaultRouter()
router.register('policecomplain', PoliceComplainViewSet, '')
router.register('medicalcomplain', MedicalComplainViewSet, '')
router.register('firecomplain', FireComplainViewSet, '')
urlpatterns = [

    # path('/api', )
]
urlpatterns += router.urls
