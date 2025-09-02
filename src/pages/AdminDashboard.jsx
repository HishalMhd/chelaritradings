import React from 'react'
import { Link } from 'react-router-dom'
import logoChelari from '../assets/logochelari-removebg-preview.png'

function AdminDashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Sidebar */}
          <div
            className="col-12 col-md-3 text-white py-4"
            style={{ backgroundColor: "#003366" }}
          >
            <div className="text-center mt-3 mt-md-5">
              <Link className="text-decoration-none text-white" to={"/"}>
                <div className="border border-0 p-3 rounded shadow m-3 bg-white">
                  <img
                    src={logoChelari}
                    className="img-fluid rounded"
                    alt="Chelari Logo"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
              </Link>

              <ul className="list-unstyled mt-4 mt-md-5 fs-5 fw-bold">
                <li>
                  <Link
                    to={"/admin/login"}
                    className="text-decoration-none text-white"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9 position-relative">
            {/* Background Logo */}
            <div
              style={{
                backgroundImage: `url(${logoChelari})`,
                backgroundRepeat: "repeat",
                backgroundSize: "100px",
                opacity: 0.2,
                position: "absolute",
                inset: 0,
                zIndex: 0,
              }}
            ></div>

            <div className="d-flex justify-content-center align-items-center min-vh-100 position-relative" style={{ zIndex: 1 }}>
              <div className="text-center p-4 p-md-5 rounded bg-white shadow-lg w-100" style={{ maxWidth: "500px" }}>
                <h1 className="fw-bold" style={{ color: "#003366" }}>
                  Welcome, Admin!
                </h1>
                <h5 className="mt-3">
                  Manage users and services using the options on the{" "}
                  <span className="d-none d-md-inline">left sidebar</span>
                  <span className="d-inline d-md-none">above</span>.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
