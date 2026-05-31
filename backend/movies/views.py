from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Movie
from .serializers import MovieSerializer


@api_view(["GET"])
def movie_list(request):

    movies = Movie.objects.all()

    search = request.GET.get("search")
    genre = request.GET.get("genre")
    sort = request.GET.get("sort")

    # Search
    if search:
        movies = movies.filter(
            title__icontains=search
        )

    # Genre Filter
    if genre and genre != "All":
        movies = movies.filter(
            genre=genre
        )

    # Sorting
    if sort == "rating_desc":
        movies = movies.order_by("-rating")

    elif sort == "rating_asc":
        movies = movies.order_by("rating")

    elif sort == "year_desc":
        movies = movies.order_by("-released_date")

    elif sort == "year_asc":
        movies = movies.order_by("released_date")

    elif sort == "title_asc":
        movies = movies.order_by("title")

    elif sort == "title_desc":
        movies = movies.order_by("-title")

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