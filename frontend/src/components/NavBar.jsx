import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
        >
           Anime Movie
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold"
                    : "nav-link"
                }
              >
                <i className="bi bi-house-fill me-1"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold"
                    : "nav-link"
                }
              >
                <i className="bi bi-heart-fill me-1"></i>
                Favorites
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/watchlist"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold"
                    : "nav-link"
                }
              >
                <i className="bi bi-bookmark-fill me-1"></i>
                Watchlist
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;