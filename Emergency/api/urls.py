from rest_framework import routers
from .api import PoliceComplainViewSet

from django.urls import path, include


router = routers.DefaultRouter()
router.register('policecomplain', PoliceComplainViewSet, 'student')
urlpatterns = [

    # path('/api', )
]
urlpatterns += router.urls
