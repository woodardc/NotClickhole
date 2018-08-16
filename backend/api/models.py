from django.db import models

# Create your models here.
class NewsItem(models.Model):
    #id = models.AutoField(); done by default
    title = models.TextField();
    user =  models.CharField(max_length=64);
    time = models.DateTimeField(null=True, blank=True);
    time_ago =  models.TextField();
    comments_count = models.PositiveIntegerField(null=True, blank=True);
    type = models.TextField();
    url = models.TextField();
    domain = models.TextField();
    points = models.PositiveIntegerField(null=True, blank=True);

