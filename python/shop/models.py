# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from datetime import datetime
import time
import pytz


def new_today():
    return datetime.fromtimestamp(int(time.time()), pytz.timezone(
        'Asia/Shanghai')).strftime('%Y-%m-%d %H:%M:%S')


class ShopClassify(models.Model):
    name = models.CharField(max_length=500)
    parent_id = models.IntegerField(blank=True, null=True)
    classify_level = models.IntegerField(blank=True, null=True)
    delete_flag = models.IntegerField(blank=True, null=True, default=0)
    created = models.DateTimeField(blank=True, null=True)
    created_by = models.CharField(
        max_length=36, blank=True, null=True, default='kefan')
    updated = models.DateTimeField(blank=True, null=True, default=new_today)
    updated_by = models.CharField(
        max_length=36, blank=True, null=True, default='kefan')
    order_by = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'shop_classify'
