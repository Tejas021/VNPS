from django.contrib import admin
from .models import PoliceComplain, UserIn,MedicalComplain,FireComplain
# Register your models here.
admin.site.register(PoliceComplain)
admin.site.register(FireComplain)
admin.site.register(MedicalComplain)
admin.site.register(UserIn)


