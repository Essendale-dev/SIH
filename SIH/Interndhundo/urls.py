from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("Pages/login.html", views.login_page, name="login"),
    path("Pages/dashboard.html", views.dashboard, name="dashboard"),
    path("Pages/application.html", views.application_page, name="application"),
    path("submit-application/", views.submit_application, name="submit_application"),
]
