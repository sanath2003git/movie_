import { useState } from "react"
import { registerUser } from "../services/authApi"
import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [username, setUsername] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [message, setMessage] =
    useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await registerUser(
        username,
        email,
        password
      )

      setMessage(
        "Registration successful"
      )

      setTimeout(() => {
        navigate("/login")
      }, 1500)

    } catch {

      setMessage(
        "Registration failed"
      )

    }

  }

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card p-4">

            <h2 className="text-center mb-4">
              Register
            </h2>

            {message && (
              <div className="alert alert-info">
                {message}
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
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(
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
                className="btn btn-success w-100"
              >
                Register
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register