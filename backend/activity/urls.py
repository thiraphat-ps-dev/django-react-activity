from django.conf.urls import url, include
from activity.views import *
from rest_framework import routers, serializers, viewsets

router = routers.DefaultRouter()
router.register(r'activitys', ActivityViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    # url(r'^activity/$', ActivitylistView.as_view(), name='activity')
]
