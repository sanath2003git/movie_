from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=200)
    franchise = models.CharField(max_length=200)

    genre = models.CharField(max_length=100)

    rating = models.FloatField()

    released_date = models.IntegerField()

    description = models.TextField()

    image_url = models.URLField()

    def __str__(self):
        return self.title