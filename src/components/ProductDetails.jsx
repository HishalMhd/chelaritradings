import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SERVER_URL from '../services/server_url'
import '../App.css'
import { getProductByIdApi, getAllProductsApi } from '../services/allAPI'
import { FaWhatsapp, FaDownload, FaArrowLeft } from "react-icons/fa"
import OurProductCard from './OurProductCard'

function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [randomProducts, setRandomProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            try {
                const selectedProduct = await getProductByIdApi(id)
                setProduct(selectedProduct.data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        const fetchRandomProducts = async () => {
            try {
                const allProducts = await getAllProductsApi()
                if (allProducts.status === 200) {
                    const filtered = allProducts.data.filter(item => item._id !== id)
                    const shuffled = [...filtered].sort(() => 0.5 - Math.random())
                    setRandomProducts(shuffled.slice(0, 6))
                }
            } catch (err) {
                console.error(err)
            }
        }

        fetchProduct()
        fetchRandomProducts()
    }, [id])

    return (
        <>
            <Header />

            {/* Breadcrumb / Banner */}
            <div className='w-100 py-3' style={{ backgroundColor: "#f1f5f9" }}>
                <div className='container d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center'>
                    <h5 className='mb-2 mb-md-0 text-dark'>Product Details</h5>
                    {!loading && (
                        <div className='text-md-end'>
                            <Link className='text-decoration-none text-primary me-2' to={'/'}>Home</Link>
                            / <span className='text-secondary ms-2'>{product.itemname}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Product Section */}
            <div className="container my-4" style={{ minHeight: "calc(100vh - 180px)" }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-10">
                        {loading ? (
                            <div className="card shadow rounded-4 border-0 p-3">
                                <div className="row g-3">
                                    <div className="col-12 col-lg-6">
                                        <div className="skeleton skeleton-img" style={{ height: '300px' }}></div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="skeleton skeleton-text mb-2" style={{ width: "60%" }}></div>
                                        <div className="skeleton skeleton-text mb-2" style={{ width: "40%" }}></div>
                                        <div className="skeleton skeleton-text mb-2" style={{ width: "50%" }}></div>
                                        <div className="skeleton skeleton-text mb-2" style={{ width: "90%", height: "150px" }}></div>
                                        <div className="d-flex gap-2 mt-3 flex-wrap">
                                            <div className="skeleton skeleton-btn" style={{ flex: '1 1 45%' }}></div>
                                            <div className="skeleton skeleton-btn" style={{ flex: '1 1 45%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="card shadow rounded-4 border-0">
                                <div className="row g-0 flex-column flex-lg-row">
                                    {/* Image Section */}
                                    <div className="col-12 col-lg-6">
                                        <img
                                            src={`${SERVER_URL}/uploads/${product.productImg}`}
                                            alt={product.itemname}
                                            className="img-fluid w-100 rounded-top rounded-lg-start"
                                            style={{ objectFit: "cover", minHeight: "300px", maxHeight: '500px' }}
                                        />
                                    </div>

                                    {/* Details Section */}
                                    <div className="col-12 col-lg-6 d-flex flex-column">
                                        <div className="card-body d-flex flex-column h-100 p-4">
                                            <h2 className="card-title fw-bold">{product.itemname}</h2>
                                            <p className="text-muted mb-1"><strong>Brand:</strong> {product.brand}</p>
                                            <p className="text-muted mb-2"><strong>Category:</strong> {product.category}</p>
                                            <hr />
                                            <p className="card-text flex-grow-1">{product.description}</p>

                                            <div className='mt-3 d-flex flex-wrap gap-2'>
                                                {product.productPdf && (
                                                    <a
                                                        href={`${SERVER_URL}/uploads/${product.productPdf}`}
                                                        download
                                                        className="btn btn-danger rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                                        style={{ flex: '1 1 45%' }}
                                                    >
                                                        <FaDownload /> Download PDF
                                                    </a>
                                                )}

                                                <a
                                                    href={`https://wa.me/919072555257?text=Hello! I'm interested in ${product.itemname}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-success rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                                    style={{ flex: '1 1 45%' }}
                                                >
                                                    <FaWhatsapp /> Enquire Now
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <button
                                                    onClick={() => navigate(-1)}
                                                    className="btn btn-outline-secondary rounded-pill px-4 py-2 d-flex align-items-center gap-2"
                                                >
                                                    <FaArrowLeft /> Go Back
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Our Products Section */}
            <div className="container my-5">
                <h3 className="fw-bold mb-4 text-center" style={{ color: "#003366" }}>
                    Our Products
                </h3>
                <div className="d-flex gap-3 overflow-auto pb-3 px-2" style={{ scrollSnapType: "x mandatory" }}>
                    {randomProducts.length > 0 ? (
                        randomProducts.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    flex: "0 0 auto",
                                    scrollSnapAlign: "start",
                                    minWidth: "200px",
                                    maxWidth: "250px"
                                }}
                            >
                                <OurProductCard displayData={item} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted">No products to display.</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProductDetails
