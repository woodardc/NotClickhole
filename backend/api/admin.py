from django.contrib import admin
from api.models import NewsItem
# Register your models here.
@admin.register(NewsItem)
class NewsItemAdmin(admin.ModelAdmin):
    fields = ('title','user', 'url','domain')
    list_display = ['title','user','time','time_ago','type']
    search_fields = ('title', 'user', 'url')