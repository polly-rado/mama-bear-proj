from django.urls import path
from .views import ChildListCreateView, ChildDetailView

urlpatterns = [
    path('children/', ChildListCreateView.as_view(), name='child-list-create'),
    path('children/<int:id>/', ChildDetailView.as_view(), name='child-detail'),
]
