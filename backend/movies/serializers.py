from rest_framework import serializers
from .models import (
    Movie,
    Favorite,
    Watchlist
)


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"

class FavoriteSerializer(serializers.ModelSerializer):

    movie = MovieSerializer()

    class Meta:
        model = Favorite
        fields = "__all__"

class WatchlistSerializer(
    serializers.ModelSerializer
):

    movie = MovieSerializer()

    class Meta:
        model = Watchlist
        fields = "__all__"