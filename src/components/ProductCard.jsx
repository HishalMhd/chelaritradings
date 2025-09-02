import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import SERVER_URL from '../services/server_url'
import ProductDetails from './ProductDetails'


function ProductCard({ displayData }) {
    return (
        <div 
            className="card border-0 shadow-sm rounded-4 product-card"
            style={{ width: "100%", maxWidth: "320px", minHeight: "450px" ,maxHeight:"450px"}}
        >
            {/* Product Image */}
            <div className="bg-white text-center d-flex align-items-center justify-content-center rounded-top" 
                 style={{ height: "220px" }}>
                <img
                    src={`${SERVER_URL}/uploads/${displayData?.productImg}`}
                    className="img-fluid"
                    style={{ maxHeight: "190px", objectFit: "contain" }}
                    
                />
            </div>

            {/* Product Body */}
            <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title fw-bold text-black mb-2">
                    {displayData?.itemname}
                </h5>
                <p className="text-primary small mb-3">
                    {displayData?.brand} | {displayData?.category}
                </p>
                <p className="card-text text-dark small flex-grow-1">
                    {displayData?.description?.length > 100
                        ? displayData?.description.slice(0, 100) + "..."
                        : displayData?.description}
                </p>

                <Link
                to={`/productdetails/${displayData._id}`}
                    className="btn btn-outline-primary mt-auto rounded-pill"
                    
                >
                    More Info
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
