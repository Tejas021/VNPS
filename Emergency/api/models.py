from django.db import models
from django.db.models.fields import DateField
from django.contrib.auth.models import User
from django.db.models.signals import post_save
# Create your models here.


class UserIn(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    aadhaarno = models.IntegerField()


class PoliceComplain(models.Model):
    title = models.CharField(max_length=255)
    phone = models.IntegerField()
    description = models.CharField(max_length=500)
    date = models.DateField(max_length=12)
    latitude = models.FloatField(max_length=10, default=0.0)
    longitude = models.FloatField(max_length=10, default=0.0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class FireComplain(models.Model):
    title = models.CharField(max_length=255)
    phone = models.IntegerField()
    description = models.CharField(max_length=500)
    date = models.DateField(max_length=12)
    latitude = models.FloatField(max_length=10, default=0.0)
    longitude = models.FloatField(max_length=10, default=0.0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class MedicalComplain(models.Model):
    title = models.CharField(max_length=255)
    phone = models.IntegerField()
    description = models.CharField(max_length=500)
    date = models.DateField(max_length=12)
    latitude = models.FloatField(max_length=10, default=0.0)
    longitude = models.FloatField(max_length=10, default=0.0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


def user_did_save(sender, instance, created, *args, **kwargs):
    if created:
        UserIn.objects.create(user=instance)


post_save.connect(user_did_save, sender=User)
