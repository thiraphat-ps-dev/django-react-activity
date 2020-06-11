from django.shortcuts import render
from rest_framework import generics         
from activity.serializers import ActivitySerializer     
from activity.models import Activity                    
from activity.pagination import CustomPagination




class ActivitylistView(generics.ListAPIView):       
    serializer_class = ActivitySerializer          
    queryset = Activity.objects.all()             
    pagination_class = CustomPagination