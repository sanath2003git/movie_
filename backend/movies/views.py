from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Movie
from .serializers import MovieSerializer


@api_view(["GET"])
def movie_list(request):

    movies = Movie.objects.all()

    search = request.GET.get("search")
    genre = request.GET.get("genre")

    if search:
        movies = movies.filter(
            title__icontains=search
        )

    if genre and genre != "All":
        movies = movies.filter(
            genre=genre
        )

    serializer = MovieSerializer(
        movies,
        many=True
    )

    return Response(serializer.data)


@api_view(["GET"])
def movie_detail(request, pk):

    movie = Movie.objects.get(pk=pk)

    serializer = MovieSerializer(movie)

    return Response(serializer.data)