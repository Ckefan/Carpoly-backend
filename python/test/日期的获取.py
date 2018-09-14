# 获取某月日历
import calendar,time
print('当前时间戳:',time.time())
print('当前本地时间：',time.localtime(time.time()))
print('格式化后时间：',time.asctime(time.localtime(time.time())))
print('模板格式化标准时间',time.strftime("%Y-%m-%d %H:%M:%S",time.localtime()))
print('模板格式化时间 Sat：',time.strftime("%a %b %d %H:%M:%S %Y",time.localtime()))
print('字符串转时间戳:',time.mktime(time.strptime("Sat Mar 28 22:24:24 2016","%a %b %d %H:%M:%S %Y")))
print('字符串转时间戳2:',int(time.mktime(time.strptime("2018-07-14 23:27:36","%Y-%m-%d %H:%M:%S"))))

cal = calendar.month(2018, 7, 1)
print(cal)