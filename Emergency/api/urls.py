from rest_framework import routers
from .api import PoliceComplainViewSet, FireComplainViewSet, MedicalComplainViewSet
from .views import current_user, UserList, FireEmergency, MedicalEmergency, PoliceEmergency

from django.urls import path, include


router = routers.DefaultRouter()
router.register('policecomplain', PoliceComplainViewSet, '')
router.register('medicalcomplain', MedicalComplainViewSet, '')
router.register('firecomplain', FireComplainViewSet, '')

urlpatterns = [path('current_user/', current_user),
               path('users/', UserList.as_view()),
               path('getmedical/', MedicalEmergency.as_view()),
               path('getfire/', FireEmergency.as_view()),
               path('getpolice/', PoliceEmergency.as_view())]
urlpatterns += router.urls
