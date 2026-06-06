from rest_framework import serializers
from .models import (
    Movie,
    Favorite,
    Watchlist
)
from django.contrib.auth.models import User


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

class RegisterSerializer(
    serializers.ModelSerializer
):

    password = serializers.CharField(
        write_only=True
    )

    class Meta:
        model = User

        fields = [
            "username",
            "email",
            "password"
        ]

    def create(
        self,
        validated_data
    ):

        user = User.objects.create_user(
            username=
            validated_data[
                "username"
            ],

            email=
            validated_data[
                "email"
            ],

            password=
            validated_data[
                "password"
            ]
        )

        return user