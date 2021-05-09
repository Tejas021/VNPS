from django.db import models
from django.db.models.fields import DateField

# Create your models here.


class PoliceEmergency(models.Model):
    name = models.CharField(max_length=255)
    phone = models.IntegerField(max_length=11)
    complain = models.CharField(max_length=500)
    date = models.DateField(max_length=12)
