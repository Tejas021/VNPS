from django.db import models
from django.db.models.fields import DateField
from django.contrib.auth.models import User
# Create your models here.


class UserIn(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    aadhaarno = models.IntegerField()
    
class PoliceEmergency(models.Model):
    name = models.CharField(max_length=255)
    phone = models.IntegerField()
    complain = models.CharField(max_length=500)
    date = models.DateField(max_length=12)
