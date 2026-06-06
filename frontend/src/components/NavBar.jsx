import { NavLink, useNavigate } from "react-router-dom"

function NavBar() {

  const navigate = useNavigate()

  const isLoggedIn =
    localStorage.getItem("access")

  const handleLogout = () => {

    localStorage.removeItem(
      "access"
    )

    localStorage.removeItem(
      "refresh"
    )

    navigate("/login")

    window.location.reload()
  }

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

            {isLoggedIn ? (
              <>
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

                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger ms-2"
                    onClick={
                      handleLogout
                    }
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active fw-bold"
                        : "nav-link"
                    }
                  >
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active fw-bold"
                        : "nav-link"
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default NavBar