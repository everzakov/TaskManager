FROM python:3.11-slim

ENV PYTHONUNBUFFERED 1

WORKDIR /opt/app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
