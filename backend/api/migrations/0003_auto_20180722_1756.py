# Generated by Django 2.0.7 on 2018-07-22 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180722_1754'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsitem',
            name='comments_count',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='newsitem',
            name='points',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
