from django.contrib import admin
from activity.models import Activity

class ActivityAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'description', 'completed','start_date','end_date')
    list_editable = ('title','completed')

admin.site.register(Activity, ActivityAdmin)