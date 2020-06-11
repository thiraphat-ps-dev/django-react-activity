
from django.db import models
# Create your models here.

# add this
class Activity(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    start_date = models.DateField()
    end_date = models.DateField()
    
    def _str_(self):
        return self.title