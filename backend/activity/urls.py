from django.conf.urls import url,include
from activity.views import *


urlpatterns = [
    
    url(r'^activity/$', ActivitylistView.as_view(), name='activity')
]