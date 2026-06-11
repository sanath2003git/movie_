from django.db import models
from django.contrib.auth.models import User


class Movie(models.Model):

    title = models.CharField(
        max_length=200
    )

    franchise = models.CharField(
        max_length=200
    )

    genre = models.CharField(
        max_length=100
    )

    rating = models.FloatField()

    released_date = models.IntegerField()

    description = models.TextField()

    image_url = models.URLField()

    def __str__(self):
        return self.title


class Favorite(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    movie = models.ForeignKey(
        Movie,
        on_delete=models.CASCADE
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return (
            f"{self.user.username} - "
            f"{self.movie.title}"
        )


class Watchlist(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    movie = models.ForeignKey(
        Movie,
        on_delete=models.CASCADE
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return (
            f"{self.user.username} - "
            f"{self.movie.title}"
        )