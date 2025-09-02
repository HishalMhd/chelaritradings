import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#003366" }}>
        <div className="container text-white pt-5">
          <div className="row text-center text-md-start">

            {/* Contact Us */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="fa-solid fa-house me-2"></i> Chelari Tradings <br />
                  Thazhe Chelari, Vellimukku <br /> P.O Malappuram, Kerala
                </li>
                <li className="mb-2">
                  <i className="fa-solid fa-phone me-2"></i> +91 9072 555 257
                </li>
                <li>
                  <i className="fa-solid fa-envelope me-2"></i> info@chelaritradings.com
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="mb-3">Opening Hours</h5>
              <ul className="p-0 list-unstyled small">
                <li className="mb-1">Sunday 9 AM - 12:30 PM</li>
                <li className="mb-1">Monday 8 AM - 8 PM</li>
                <li className="mb-1">Tuesday 8 AM - 8 PM</li>
                <li className="mb-1">Wednesday 8 AM - 8 PM</li>
                <li className="mb-1">Thursday 8 AM - 8 PM</li>
                <li className="mb-1">Friday 8 AM - 8 PM</li>
                <li className="mb-1">Saturday 8 AM - 8 PM</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="p-0 list-unstyled small">
                <li className="mb-1">
                  <Link to="/hardware" className="text-decoration-none text-white">Hardware</Link>
                </li>
                <li className="mb-1">
                  <Link to="/plywood" className="text-decoration-none text-white">Plywood</Link>
                </li>
                <li className="mb-1">
                  <Link to="/doors" className="text-decoration-none text-white">Doors</Link>
                </li>
                <li className="mb-1">
                  <Link to="/kitchenfittings" className="text-decoration-none text-white">Kitchen Fittings</Link>
                </li>
                <li>
                  <Link to="/glass" className="text-decoration-none text-white">Glass</Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="mb-3">Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white fs-5"><i className="fa-brands fa-facebook"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white fs-5"><i className="fa-brands fa-x-twitter"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white fs-5"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white fs-5"><i className="fa-brands fa-google-plus-g"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white fs-5"><i className="fa-brands fa-pinterest"></i></a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white fs-5"><i className="fa-brands fa-flickr"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="container" style={{ borderColor: "rgba(255, 255, 255, 1)" }} />

        {/* Copyright */}
        <div className="text-center small text-white pb-3">
          © 2025 Chelari Tradings. All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
