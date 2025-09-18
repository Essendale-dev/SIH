# Create your views here.

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .models import Application


def index(request):
    return render(request, "index.html")

def login_page(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("dashboard")  # Redirect to dashboard page
        else:
            return render(request, "Interndhundo/login.html", {"error": "Invalid username or password"})
    return render(request, "login.html")

# --- Dashboard View (protected) ---

@login_required(login_url="login") # user must be logged in
def dashboard(request):
    return render(request, "dashboard.html")

def application_page(request):
    return render(request, "application.html")

def submit_application(request):
    if request.method == "POST":
        Application.objects.create(
            full_name = request.POST.get("fullName"),
            email = request.POST.get("email"),
            phone = request.POST.get("phone"),
            dob = request.POST.get("dob"),
            address = request.POST.get("address"),
            gender = request.POST.get("gender"),
            marital_status = request.POST.get("maritalStatus"),
            nationality = request.POST.get("nationality"),
            linkedin = request.POST.get("linkedin"),
            father_name = request.POST.get("fatherName"),
            mother_name = request.POST.get("motherName"),
            religion = request.POST.get("religion"),
            languages = request.POST.get("languages"),
            degree = request.POST.get("degree"),
            interested_roles = request.POST.get("interestedRoles"),
            achievements = request.POST.get("achievements"),
            preference = request.POST.get("preference"),
            city = request.POST.get("city"),
            experience = request.POST.get("experience"),
            skills = request.POST.get("skills"),
        )
        
        # redirect back to dashboard after submit
        return redirect("dashboard")

    return HttpResponse("Invalid request method", status=405)
