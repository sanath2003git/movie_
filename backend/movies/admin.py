from django.contrib import admin
from .models import (
    Movie,
    Favorite,
    Watchlist
)
admin.site.register(Movie)
admin.site.register(Favorite)
admin.site.register(Watchlist)