from django.db import models
from django.db.models.fields import DateField
from django.contrib.auth.models import User
from django.db.models.signals import post_save
# Create your models here.


class UserIn(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    aadhaarno = models.IntegerField()


class PoliceComplain(models.Model):
    name = models.CharField(max_length=255)
    phone = models.IntegerField()
    complain = models.CharField(max_length=500)
    date = models.DateField(max_length=12)


class FireComplain(models.Model):
    name = models.CharField(max_length=255)
    phone = models.IntegerField()
    complain = models.CharField(max_length=500)
    date = models.DateField(max_length=12)


class MedicalComplain(models.Model):
    name = models.CharField(max_length=255)
    phone = models.IntegerField()
    complain = models.CharField(max_length=500)
    date = models.DateField(max_length=12)


def user_did_save(sender,instance,created,*args,**kwargs):
    if created:
        UserIn.objects.create(user=instance)

post_save.connect(user_did_save,sender=User)