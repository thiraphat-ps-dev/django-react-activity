from django.shortcuts import render
from rest_framework import viewsets
from activity.serializers import ActivitySerializer
from activity.models import Activity
from activity.pagination import CustomPagination


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all().order_by('completed','start_date', '-id')
    serializer_class = ActivitySerializer
    pagination_class = CustomPagination
