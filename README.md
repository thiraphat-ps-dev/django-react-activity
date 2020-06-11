# django-react-activity

An application for recording daily to-do lists.

## Installation

Download and install [Node.Js](https://nodejs.org/en/download/) for install package.
<br/>

Install Python3

```bash
$ npm install python
```

Check Python version

```bash
$ python -V
```

Result

```bash
Python 2.7.16
```

Install pip

```bash
$ npm install pip
```

Check pip version

```bash
$ pip -V
```

Result

```bash
pip 20.2b1 from /Library/Python/2.7/site-packages/pip-20.2b1-py2.7.egg/pip (python 2.7)
```

Create venv python3 with command

```bash
$ python3 -m venv ./venv
```

Activate venv

```bash
$ source venv/bin/activate
```

If you want to deactivate use this command

Deactivate venv

```bash
$ deactivate
```

Create project directory

```bash
$ makedir django-react-activity
```

Go to root directory

```bash
$ cd django-react-activity
```

Install Django

```bash
$ pip install django
```

Check django version

```bash
$ python -c "import django; print(django.get_version())"
```

Result

```bash
(venv) thiraphat.ps.dev@Mac-mini django-react-activity % python -c "import django; print(django.get_version())"
3.0.7
```

Create project django backend in root directory

```bash
$ django-admin startproject backend
```

Structure

```bash
django-react-activity
│
└───backend
```

Go to backend folder

```bash
$ cd backend
```

Create app activity with command

```bash
$ python manage.py startapp activity
```

Structure

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
```

Run migrations and start server

```bash
$ python manage.py migrate
$ python manage.py runserver
```

Server is running
![image info](./img/runserver_1.png)

Register the activity app
<br>
Go to backend/settings.py to add activity app

```python
    # Application definition
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'activity' # add activity app
      ]
```

Create directory models in activity app folder

```bash
$ cd activity
$ makedir models
```

Structure

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───models
```

Copy file **init**.py in backend folder and paste it to /models

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───models
            │
            └───__init__.py
```

Create activityModel.py file in models

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───models
            │
            └───__init__.py
            │
            └───activityModel.py

```

Create Activity model in activityModel.py

```python
from django.db import models

class Activity(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    start_date = models.DateField()
    end_date = models.DateField()

    def _str_(self):
        return self.title
```

And add this in to models/**init**.py

```python
from .activityModel import *
```

Run makemigrations

```python
$ python manage.py makemigrations activity

```

```bash
Migrations for 'activity':
  activity/migrations/0001_initial.py
    - Create model Activity
```

And migrate model

```python
$ python manage.py migrate activity
```

```bash

Operations to perform:
  Apply all migrations: activity
Running migrations:
  Applying activity.0001_initial... OK
```

Create ActivityAdmin in backend/activity/admin.py

```python
from django.contrib import admin
from activity.models import Activity

class ActivityAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'description', 'completed','start_date','end_date')
    list_editable = ('title','completed')

admin.site.register(Activity, ActivityAdmin)
```

Create superuser to use djangoadmin

```python
$ python manage.py createsuperuser
```

Go to django admin page and login [http://localhost:8000/admin](http://localhost:8000/admin)
![image info](./img/django_admin_login.png)

Login to dashboard
![image info](./img/django_admin_dashboard.png)

You can try to add activity in Activitys click +Add
![image info](./img/django_admin_add_activity.png)

Success
![image info](./img/add_activity_success.png)

**Setup API**
install djangorest and django-cors-headers with command

```bash
$ pip  install djangorestframework django-cors-headers
```

And add corsheaders app, rest_framework app to backend/backend/setting.py

```python
INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'corsheaders',            # add this app
        'rest_framework',         # add this app
        'activity',
      ]
```

Add CorsMiddleware to MIDDELWARE under INSTALL_APPS

```python
    MIDDLEWARE = [
        'corsheaders.middleware.CorsMiddleware',    # add middleware
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ]
```

Add CORS_ORIGIN_WHITELIST bottom line in setting.py

```python
CORS_ORIGIN_WHITELIST = (
       'http://localhost:3000',   #for react frontend
)
```

Create serializers folder in backend/activity

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───serializers
```

Create activitySerializer.py in folder serializers

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───serializers
            │
            └───activitySerializer.py
```

Copy file **init**.py in backend folder and paste it to /serializers

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───serializers
            │
            └───activitySerializer.py
            │
            └───__init__.py
```

And add this in to serializers/**init**.py

```python
from .activitySerializer import *
```

Create ActivitySerializer

```python
from rest_framework import serializers
from activity.models import Activity

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('id', 'title', 'description', 'completed','start_date','end_date')
```

Add import to **init**.py

```python
from .activitySerializer import *
```

Create folder views

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───views
```

Create file activityView.py

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───views
            │
            └───activityView.py
```

Create ActivitylistView in activityView.py

```python
from django.shortcuts import render
from rest_framework import generics
from activity.serializers import ActivitySerializer
from activity.models import Activity

class ActivitylistView(generics.ListAPIView):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()
```

Copy file **init**.py in backend folder and paste it to /models

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───serializers
            │
            └───activityView.py
            │
            └───__init__.py
```

Add import to **init**.py

```python
from .activityView import *
```

Create file urls.py in activity app folder
```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───urls.py
```

Create url to use api in activity/urls.py
```python
from django.conf.urls import url,include
from activity.views import *

urlpatterns = [   
    url(r'^activity/$', ActivitylistView.as_view(), name='activity')
]
```

In file backend/backend/urls.py add this to link urls activityapp
```python
from django.contrib import admin
from django.urls import path
from django.conf.urls import include , url
urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include('activity.urls')),            
]
```

Create CustomPagination create file pagination.py in activity/
```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
        │
        └───pagination.py
```

Add this
```python
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

DEFAULT_PAGE = 1
DEFAULT_PAGE_SIZE = 10

class CustomPagination(PageNumberPagination):
    page = DEFAULT_PAGE
    page_size = DEFAULT_PAGE_SIZE
    page_size_query_param = 'page_size'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'total': self.page.paginator.count,
            # can not set default = self.page
            'page': int(self.request.GET.get('page', DEFAULT_PAGE)),
            'page_size': int(self.request.GET.get('page_size', self.page_size)),
            'results': data
        })

```


In backend/settings.py add this bottom line
```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS':    
         'activity.pagination.CustomPagination'
}
```

In views/activityView.py add custompagination
```python
from django.shortcuts import render
from rest_framework import generics         
from activity.serializers import ActivitySerializer     
from activity.models import Activity                    
from activity.pagination import CustomPagination        #add custom pagination

class ActivitylistView(generics.ListAPIView):       
    serializer_class = ActivitySerializer          
    queryset = Activity.objects.all()             
    pagination_class = CustomPagination          #add custom pagination
```

Go to url [http://localhost:8000/api/activity/](http://localhost:8000/api/activity/)
![image info](./img/activity_list.png)