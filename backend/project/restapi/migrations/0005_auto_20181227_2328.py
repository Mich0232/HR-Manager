# Generated by Django 2.1.3 on 2018-12-27 22:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0004_auto_20181207_1019'),
    ]

    operations = [
        migrations.AddField(
            model_name='employees',
            name='birthdays',
            field=models.DateField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='employees',
            name='age',
            field=models.IntegerField(default=24),
        ),
        migrations.AlterField(
            model_name='employees',
            name='position',
            field=models.CharField(choices=[('developer', 'developer'), ('secretary', 'secretary'), ('business', 'business')], max_length=20),
        ),
        migrations.AlterField(
            model_name='employees',
            name='started_at',
            field=models.DateField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='employees',
            name='vacation_days',
            field=models.IntegerField(default=26),
        ),
        migrations.AlterField(
            model_name='employees',
            name='vacation_days_left',
            field=models.IntegerField(default=26),
        ),
    ]