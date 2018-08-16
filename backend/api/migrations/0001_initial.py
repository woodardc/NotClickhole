# Generated by Django 2.0.7 on 2018-07-22 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewsItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('user', models.CharField(max_length=64)),
                ('time', models.DateTimeField()),
                ('time_ago', models.TextField()),
                ('comments_count', models.PositiveIntegerField()),
                ('type', models.TextField()),
                ('url', models.TextField()),
                ('domain', models.TextField()),
                ('points', models.PositiveIntegerField()),
            ],
        ),
    ]
