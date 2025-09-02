import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoChelari from '../assets/logochelari-removebg-preview.png'
import { toast } from 'react-toastify'
import { registerApi } from '../services/allAPI'

function AdminRegister() {
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (userDetails.username && userDetails.email && userDetails.password) {
      try {
        const result = await registerApi(userDetails)
        if (result.status === 200) {
          setUserDetails({ username: "", email: "", password: "" })
          navigate('/admin/login')
        } else if (result.status === 406) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.warning("Enter all fields completely")
    }
  }

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column flex-lg-row p-0">
      {/* Sidebar */}
      <div style={{ backgroundColor: "#003366" }} className="text-white d-flex flex-column align-items-center py-4 col-12 col-lg-3">
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

      {/* Register Form Section */}
      <div className="col-12 col-lg-9 d-flex justify-content-center align-items-center position-relative">
        {/* Background Logo Watermark */}
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

        {/* Form Card */}
        <div className="shadow-lg p-4 p-md-5 bg-white rounded w-100 mx-3 mx-md-0"
          style={{ maxWidth: "400px", zIndex: 1 }}>
          <h2 className="text-center fw-bold">Sign Up</h2>
          <h6 className="text-center mb-4">Please sign up with an Account</h6>

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

          {/* Email */}
          <div className="mb-3">
            <h6>Email Address</h6>
            <input
              value={userDetails.email}
              onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
              type="email"
              className="form-control"
              placeholder="Enter your email"
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

          {/* Sign Up Button */}
          <button
            onClick={handleRegister}
            className="btn w-100 fw-bold mt-3 text-white"
            style={{ backgroundColor: "#003366" }}
          >
            SIGN UP
          </button>

          <h6 className="mt-4 text-center">
            Already have an account? <Link to={'/admin/login'}>Sign In</Link>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default AdminRegister
