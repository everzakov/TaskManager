from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("tasks/", TaskList.as_view()),
    path("task/create/", TaskCreate.as_view()),
    path("task/<int:pk>/", TaskDelete.as_view()),
    path("register/", UserCreate.as_view()),
    path('auth/token/', TokenObtainPairView.as_view()),
    path('auth/token/refresh/', TokenRefreshView.as_view())
]
