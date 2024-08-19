from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import User
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.status import HTTP_201_CREATED
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse

class Sign_up(APIView):
    def post(self, request):
        request.data["username"] = request.data["email"]
        user = User.objects.create_user(**request.data)
        token = Token.objects.create(user=user)
        return Response(
            {"user": user.email, "token": token.key},
            status=HTTP_201_CREATED
        )
    
class UserListCreateView(APIView):
    def get(self, request):
        users = User.objects.all()
        serialized_users = UserSerializer(users, many=True)
        return Response(serialized_users.data)

    def post(self, request):
        new_user = UserSerializer(data=request.data)
        if new_user.is_valid():
            new_user.save()
            return Response(new_user.data, status=status.HTTP_201_CREATED)
        return Response(new_user.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(APIView):
    def get(self, request, id):
        user = get_object_or_404(User, id=id)
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data)

    def put(self, request, id):
        user = get_object_or_404(User, id=id)
        updated_user = UserSerializer(user, data=request.data, partial=True)
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data)
        return Response(updated_user.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        user = get_object_or_404(User, id=id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Master_Sign_Up(APIView):

        def post(self, request):
            master_user = User.objects.create_user(**request.data)
            master_user.is_staff = True
            master_user.is_superuser = True
            master_user.save()
            token = Token.objects.create(user=master_user)
            return Response(
                {"master_user": master_user.email, "token": token.key}, 
                status=HTTP_201_CREATED
            )
        
class Log_in(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(username=email, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response(
                {"token": token.key, "user": user.email},
                status=status.HTTP_200_OK
            )
        return Response(
            {"error": "No user matching credentials"},
            status=status.HTTP_404_NOT_FOUND
        )

class Info(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"email": request.user.email})

class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def test_connection(request):
    return JsonResponse({"message": "Test was successful we are connected"})