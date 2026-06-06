from django.urls import path
from .views import (
    movie_list,
    movie_detail,

    favorite_list,
    add_favorite,
    delete_favorite,

    watchlist_list,
    add_watchlist,
    delete_watchlist,

    register_user
)

urlpatterns = [
    path("", movie_list),
    path("<int:pk>/", movie_detail),
    path("favorites/",favorite_list),
    path("favorites/add/",add_favorite),
    path("favorites/delete/<int:movie_id>/",delete_favorite),
    path("watchlist/",watchlist_list),
    path("watchlist/add/",add_watchlist),
    path("watchlist/delete/<int:movie_id>/",delete_watchlist),
    path("register/",register_user),
]