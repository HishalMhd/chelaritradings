import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoChelari from '../assets/logochelari-removebg-preview.png'
import { toast } from 'react-toastify'
import { loginApi } from '../services/allAPI'
import Spinner from 'react-bootstrap/Spinner';

function AdminLogin() {
  const [userDetails, setUserDetails] = useState({ username: "", password: "" })
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (userDetails.username && userDetails.password) {
      try {
        const result = await loginApi(userDetails)
        if (result.status === 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setIsLogin(true)
          setTimeout(() => {
            setUserDetails({ username: "", password: "" })
            navigate('/admin/admincontrol')
            setIsLogin(false)
          }, 2000)
        } else {
          if (result.status === 404) {
            toast.error(result.response.data)
          }
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.warning("Enter the fields completely")
    }
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column flex-lg-row p-0">
      {/* Sidebar */}
      <div style={{backgroundColor:"#003366"}} className=" text-white d-flex flex-column align-items-center py-4 col-12 col-lg-3">
        <Link className="text-decoration-none text-white w-75" to={'/'}>
          <div className="border border-0 p-3 rounded shadow bg-white">
            <img
              src={logoChelari}
              className="w-100 rounded"
              alt="Chelari Logo"
              style={{ height: "100px", objectFit: "contain" }}
            />
          </div>
        </Link>

        <ul className="list-unstyled mt-5 text-center fs-5 fw-bold">
          <li>
            <Link to={'/admin/login'} className="text-decoration-none text-white">Login</Link>
          </li>
        </ul>
      </div>

      {/* Login Form Section */}
      <div className="col-12 col-lg-9 d-flex justify-content-center align-items-center position-relative">
        <div
          style={{
            backgroundImage: `url(${logoChelari})`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px",
            opacity: 0.1,
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0
          }}
        ></div>

        <div className="shadow-lg p-4 p-md-5 bg-white rounded w-100 mx-3 mx-md-0"
          style={{ maxWidth: "400px", zIndex: 1 }}>
          <h2 className="text-center fw-bold">Sign in</h2>
          <h6 className="text-center mb-4">Please sign in to your Account</h6>

          {/* Username */}
          <div className="mb-3">
            <h6>Username</h6>
            <input
              value={userDetails.username}
              onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Enter your Username"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <h6>Password</h6>
            <input
              value={userDetails.password}
              onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            className="btn w-100 text-white mt-3"
            style={{ backgroundColor: "#003366" }}
          >
            SIGN IN{" "}
            {isLogin && (
              <Spinner size="sm" animation="border" variant="light" className="ms-2" />
            )}
          </button>

          
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
