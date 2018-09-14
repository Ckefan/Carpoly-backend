from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib import auth, admin

info = {'msg': '', 'code': 1}


# Create your views here.
def home(request):
    isAuth = request.user
    print(isAuth)
    print(isAuth.is_active)

    userInfo = User.objects.get(username=isAuth)
    print(userInfo)
    allInfo = userInfo.get_all_permissions()
    print(allInfo)

    # info['data'] = isAuth
    return JsonResponse(info, safe=False)
