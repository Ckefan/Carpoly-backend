from django.http import HttpResponse, JsonResponse
# from django.core import serializers  #序列化数据
from django.contrib.auth.models import User
from django.contrib import auth, admin
import json

# admin.site.register(auth)
info = {'msg': '', 'code': 1}


def create_user(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = User.objects.create_user(username=username, password=password)
    user.is_staff = True
    user.save()
    info['msg'] = '注册成功！'
    info['data'] = []
    return JsonResponse(info, safe=False)


def set_password(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = User.objects.get(username=username)
    user.set_password(password)
    user.save()
    info['msg'] = '密码修改成功!'
    info['data'] = []
    return JsonResponse(info, safe=False)


def login(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)
    if user is not None and user.is_active:
        auth.login(request, user)
        info['msg'] = '登陆成功!'
        info['code'] = 1
    else:
        info['msg'] = '用户名或密码错误,请重新输入!'
        info['code'] = -1

    return JsonResponse(info, safe=False)


def logout(request):
    print(request.user.is_active)
    auth.logout(request)
    print(request.user.is_active)
    info['msg'] = '注销成功！'
    info['code'] = 1
    return JsonResponse(info, safe=False)
