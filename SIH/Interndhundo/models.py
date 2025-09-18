from django.db import models

class Application(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    gender = models.CharField(max_length=20, blank=True, null=True)
    marital_status = models.CharField(max_length=20, blank=True, null=True)
    nationality = models.CharField(max_length=100, blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)

    father_name = models.CharField(max_length=255, blank=True, null=True)
    mother_name = models.CharField(max_length=255, blank=True, null=True)
    religion = models.CharField(max_length=100, blank=True, null=True)
    languages = models.CharField(max_length=255, blank=True, null=True)

    degree = models.CharField(max_length=255, blank=True, null=True)
    interested_roles = models.CharField(max_length=255, blank=True, null=True)
    achievements = models.TextField(blank=True, null=True)
    preference = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    experience = models.TextField(blank=True, null=True)

    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

# Create your models here.
