import { useState } from "react"
import { loginUser } from "../services/authApi"

function Login() {

  const [username, setUsername] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [error, setError] =
    useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const data =
        await loginUser(
          username,
          password
        )

      localStorage.setItem(
        "access",
        data.access
      )

      localStorage.setItem(
        "refresh",
        data.refresh
      )

      window.location.href = "/"

    } catch {

      setError(
        "Invalid credentials"
      )

    }

  }

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card p-4">

            <h2 className="text-center mb-4">
              Login
            </h2>

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

              <button
                className="btn btn-primary w-100"
              >
                Login
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login