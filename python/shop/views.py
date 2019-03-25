from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from shop.models import ShopClassify
from datetime import datetime
import time
import pytz
import json

# Create your views here.
info = {'msg': '请求成功!', 'code': 1}
new_time = datetime.fromtimestamp(int(time.time()), pytz.timezone(
    'Asia/Shanghai')).strftime('%Y-%m-%d %H:%M:%S')

# 设置商品分类


def add_classify(request):
    name = request.POST.get('name', '')
    classify_level = request.POST.get('classify_level', '') or 1
    if name is not '':
        add = ShopClassify(
            name=name,
            classify_level=int(classify_level),
            created=new_time
        )
        add.save()
        info['data'] = {'id': add.pk}
        info['msg'] = '分类添加成功!'
        info['code'] = 1
    else:
        info['msg'] = '请输入分类名!'
        info['code'] = -1
    return JsonResponse(info, safe=False)

# 获取商品分类


def get_classify(request):
    all = ShopClassify.objects.values(
        'id', 'name', 'parent_id', 'classify_level', 'order_by').filter(delete_flag='0')
    data = []
    for i in all:
        data.append(i)

    info['msg'] = '获取成功!'
    info['data'] = data
    info['code'] = 1
    return JsonResponse(info, safe=False)

# 删除商品


def del_classify(request):
    id = request.POST.post('id', '')
    row = ShopClassify.objects.get(id=id)
    row.delete()
