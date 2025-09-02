import React from "react"
import { Link } from "react-router-dom"
import SERVER_URL from "../services/server_url"

function OurProductCard({ displayData }) {
  return (
    <div 
      className="our-product-card position-relative bg-white shadow-sm rounded-4"
      style={{
        width: "240px",
        minHeight: "320px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Image */}
      <div 
        className="d-flex align-items-center justify-content-center rounded-top"
        style={{ 
          height: "180px", 
          background: "linear-gradient(135deg, #f8f9fa, #eef2f7)" 
        }}
      >
        <img
          src={`${SERVER_URL}/uploads/${displayData?.productImg}`}
          alt={displayData?.itemname}
          className="img-fluid"
          style={{ 
            maxHeight: "160px", 
            objectFit: "contain", 
            transition: "transform 0.3s ease" 
          }}
        />
      </div>

      {/* Body */}
      <div className="p-3 d-flex flex-column">
        <h6 
          className="fw-semibold text-dark mb-1"
          style={{ fontSize: "0.95rem", lineHeight: "1.3" }}
        >
          {displayData?.itemname?.length > 40 
            ? displayData.itemname.slice(0, 40) + "..." 
            : displayData?.itemname}
        </h6>

        <p className="text-muted small mb-2">{displayData?.brand}</p>

        {/* Floating button */}
        <Link 
          to={`/productdetails/${displayData._id}`}
          className="btn btn-primary btn-sm w-100  mt-3 align-self-start shadow-sm"
        >
          View
        </Link>
      </div>
    </div>
  )
}

export default OurProductCard
