from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import (
    Movie,
    Favorite,
    Watchlist
)
from .serializers import (
    MovieSerializer,
    FavoriteSerializer,
    WatchlistSerializer
)


@api_view(["GET"])
def movie_list(request):

    movies = Movie.objects.all()

    search = request.GET.get("search")
    genre = request.GET.get("genre")
    sort = request.GET.get("sort")

    page = int(
        request.GET.get("page", 1)
    )

    limit = 8

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

    # Count BEFORE pagination
    count = movies.count()

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

    # Pagination
    start = (page - 1) * limit
    end = start + limit

    movies = movies[start:end]

    serializer = MovieSerializer(
        movies,
        many=True
    )

    total_pages = (
        count + limit - 1
    ) // limit

    return Response({
        "count": count,
        "page": page,
        "total_pages": total_pages,
        "results": serializer.data
    })


@api_view(["GET"])
def movie_detail(request, pk):

    movie = Movie.objects.get(pk=pk)

    serializer = MovieSerializer(movie)

    return Response(serializer.data)

@api_view(["GET"])
def favorite_list(request):

    favorites = Favorite.objects.all()

    serializer = FavoriteSerializer(
        favorites,
        many=True
    )

    return Response(serializer.data)

@api_view(["POST"])
def add_favorite(request):

    movie_id = request.data.get(
        "movie_id"
    )

    movie = Movie.objects.get(
        id=movie_id
    )

    Favorite.objects.get_or_create(
        movie=movie
    )

    return Response({
        "message":
        "Added to favorites"
    })

@api_view(["DELETE"])
def delete_favorite(
    request,
    movie_id
):

    Favorite.objects.filter(
        movie_id=movie_id
    ).delete()

    return Response({
        "message":
        "Removed from favorites"
    })

@api_view(["GET"])
def watchlist_list(request):

    watchlist = Watchlist.objects.all()

    serializer = WatchlistSerializer(
        watchlist,
        many=True
    )

    return Response(serializer.data)

@api_view(["POST"])
def add_watchlist(request):

    movie_id = request.data.get(
        "movie_id"
    )

    movie = Movie.objects.get(
        id=movie_id
    )

    Watchlist.objects.get_or_create(
        movie=movie
    )

    return Response({
        "message":
        "Added to watchlist"
    })

@api_view(["DELETE"])
def delete_watchlist(
    request,
    movie_id
):

    Watchlist.objects.filter(
        movie_id=movie_id
    ).delete()

    return Response({
        "message":
        "Removed from watchlist"
    })