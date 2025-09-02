import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoChelari from "../assets/logochelari-removebg-preview.png";

function AdminControl() {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username);
    } else {
      setUsername("");
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        
        {/* Sidebar */}
        <div className="col-12 col-md-3 text-white py-4" style={{ backgroundColor: "#003366" }}>
          <div className="mt-3 text-center">
            <Link to="/" className="text-decoration-none text-white">
              <div className="border border-0 p-3 rounded shadow m-3 bg-white">
                <img
                  src={logoChelari}
                  className="img-fluid"
                  alt="Chelari Logo"
                  style={{ maxHeight: "100px" }}
                />
              </div>
            </Link>
            <ul className="list-unstyled mt-4 fs-6 fw-bold text-center text-md-start">
              <li><Link to="/admin/admincontrol/carousal" className="text-decoration-none text-white d-block py-2">Home Products</Link></li>
              <li><Link to="/admin/admincontrol/adminplywood" className="text-decoration-none text-white d-block py-2">Plywood</Link></li>
              <li><Link to="/admin/admincontrol/adminhardware" className="text-decoration-none text-white d-block py-2">Hardware</Link></li>
              <li><Link to="/admin/admincontrol/adminglass" className="text-decoration-none text-white d-block py-2">Glass</Link></li>
              <li><Link to="/admin/admincontrol/admindoors" className="text-decoration-none text-white d-block py-2">Doors</Link></li>
              <li><Link to="/admin/admincontrol/adminkitchenfittings" className="text-decoration-none text-white d-block py-2">Kitchen Fittings</Link></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 px-4 mt-4 position-relative">
          {/* Background watermark */}
          <div
            style={{
              backgroundImage: `url(${logoChelari})`,
              backgroundRepeat: "repeat",
              backgroundSize: "100px",
              opacity: 0.2,
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          ></div>

          {/* Welcome Section */}
          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
              <div className="text-center w-100 w-md-75 w-lg-50 p-4 rounded bg-white shadow">
                <h1 className="fw-bold" style={{ color: "#003366" }}>
                  Welcome, <span>{userName ? userName.split(" ")[0] : "Admin"}</span>
                </h1>
                <h5 className="mt-3">
                  Manage users and services using the options on the sidebar.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminControl;
