# Generated by Django 2.2.3 on 2020-06-02 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_pastpaper_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='pastpaper',
            name='desc',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='pastpaper',
            name='year',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
