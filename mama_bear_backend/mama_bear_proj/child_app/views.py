from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Child
from .serializers import ChildSerializer

class ChildListCreateView(APIView):
    def get(self, request):
        children = Child.objects.all()
        serialized_children = ChildSerializer(children, many=True)
        return Response(serialized_children.data)

    def post(self, request):
        new_child = ChildSerializer(data=request.data)
        if new_child.is_valid():
            new_child.save()
            return Response(new_child.data, status=status.HTTP_201_CREATED)
        return Response(new_child.errors, status=status.HTTP_400_BAD_REQUEST)

class ChildDetailView(APIView):
    def get(self, request, id):
        child = get_object_or_404(Child, id=id)
        serialized_child = ChildSerializer(child)
        return Response(serialized_child.data)

    def put(self, request, id):
        child = get_object_or_404(Child, id=id)
        updated_child = ChildSerializer(child, data=request.data, partial=True)
        if updated_child.is_valid():
            updated_child.save()
            return Response(updated_child.data)
        return Response(updated_child.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        child = get_object_or_404(Child, id=id)
        child.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
