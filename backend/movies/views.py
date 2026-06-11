from rest_framework.decorators import (
    api_view,
    permission_classes
)

from rest_framework.permissions import (
    IsAuthenticated
)

from rest_framework.response import Response

from django.contrib.auth.models import User

from .models import (
    Movie,
    Favorite,
    Watchlist
)

from .serializers import (
    MovieSerializer,
    FavoriteSerializer,
    WatchlistSerializer,
    RegisterSerializer
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

    if search:

        movies = movies.filter(
            title__icontains=search
        )

    if genre and genre != "All":

        movies = movies.filter(
            genre=genre
        )

    count = movies.count()

    if sort == "rating_desc":

        movies = movies.order_by(
            "-rating"
        )

    elif sort == "rating_asc":

        movies = movies.order_by(
            "rating"
        )

    elif sort == "year_desc":

        movies = movies.order_by(
            "-released_date"
        )

    elif sort == "year_asc":

        movies = movies.order_by(
            "released_date"
        )

    elif sort == "title_asc":

        movies = movies.order_by(
            "title"
        )

    elif sort == "title_desc":

        movies = movies.order_by(
            "-title"
        )

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

    movie = Movie.objects.get(
        pk=pk
    )

    serializer = MovieSerializer(
        movie
    )

    return Response(
        serializer.data
    )


# FAVORITES

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def favorite_list(request):

    favorites = Favorite.objects.filter(
        user=request.user
    )

    serializer = FavoriteSerializer(
        favorites,
        many=True
    )

    return Response(
        serializer.data
    )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_favorite(request):

    movie_id = request.data.get(
        "movie_id"
    )

    movie = Movie.objects.get(
        id=movie_id
    )

    Favorite.objects.get_or_create(
        user=request.user,
        movie=movie
    )

    return Response({
        "message":
        "Added to favorites"
    })


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_favorite(
    request,
    movie_id
):

    Favorite.objects.filter(
        user=request.user,
        movie_id=movie_id
    ).delete()

    return Response({
        "message":
        "Removed from favorites"
    })


# WATCHLIST

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def watchlist_list(request):

    watchlist = Watchlist.objects.filter(
        user=request.user
    )

    serializer = WatchlistSerializer(
        watchlist,
        many=True
    )

    return Response(
        serializer.data
    )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_watchlist(request):

    movie_id = request.data.get(
        "movie_id"
    )

    movie = Movie.objects.get(
        id=movie_id
    )

    Watchlist.objects.get_or_create(
        user=request.user,
        movie=movie
    )

    return Response({
        "message":
        "Added to watchlist"
    })


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_watchlist(
    request,
    movie_id
):

    Watchlist.objects.filter(
        user=request.user,
        movie_id=movie_id
    ).delete()

    return Response({
        "message":
        "Removed from watchlist"
    })


# REGISTER

@api_view(["POST"])
def register_user(request):

    serializer = RegisterSerializer(
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message":
            "User created successfully"
        })

    return Response(
        serializer.errors,
        status=400
    )