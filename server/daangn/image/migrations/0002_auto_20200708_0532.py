# Generated by Django 3.0.3 on 2020-07-08 05:32

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('image', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadfilemodel',
            name='image',
            field=imagekit.models.fields.ProcessedImageField(null=True, upload_to='product'),
        ),
    ]
