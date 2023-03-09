from django.shortcuts import render
from .models import Task
from .serial import TaskSerializers, RegisterSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class UserCreate(generics.CreateAPIView):
    serializer_class = RegisterSerializer


class TaskList(generics.ListAPIView):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()


class TaskCreate(generics.CreateAPIView):
    serializer_class = TaskSerializers


class TaskDelete(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()
