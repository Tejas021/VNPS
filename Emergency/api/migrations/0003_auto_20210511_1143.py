# Generated by Django 3.0.5 on 2021-05-11 06:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210509_2219'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PoliceEmergency',
            new_name='PoliceComplain',
        ),
    ]
