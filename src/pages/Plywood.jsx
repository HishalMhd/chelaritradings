import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Button, Dropdown } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getPlywoodProductsApi, getAllProductsApi } from '../services/allAPI'
import ProductCard from '../components/ProductCard'
import OurProductCard from '../components/OurProductCard'

function Plywood() {
  const [showAll, setShowAll] = useState(false)
  const [allPlywood, setAllPlywood] = useState([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [randomProducts, setRandomProducts] = useState([])

  useEffect(() => {
    getAllPlywood()
    getRandomProducts()
  }, [])

  const getAllPlywood = async () => {
    const result = await getPlywoodProductsApi()
    if (result.status === 200) {
      setAllPlywood(result.data)
    }
  }

  // Fetch all products and randomize "Our Products"
  const getRandomProducts = async () => {
    const result = await getAllProductsApi()
    if (result.status === 200) {
      const nonPlywood = result.data.filter(item => item.categoryGroup !== "Plywood")
      const shuffled = [...nonPlywood].sort(() => 0.5 - Math.random())
      setRandomProducts(shuffled.slice(0, 6)) // show 6 random products
    }
  }

  // Categories
  const categories = [
    "All",
    "Plywood",
    "MDF",
    "Vineer",
    "MICA",
    "Bison Panel",
    "Particle Board"
  ]

  // Brands (adjust as per your DB)
  const brands = ["Greenply", "Century", "Kitply", "Archidply"]

  // Filtering logic
  const filteredProducts = allPlywood.filter((item) => {
    const matchesSearch = item.itemname?.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "All" ? true : item.category === selectedCategory
    const matchesBrand = selectedBrand ? item.brand === selectedBrand : true
    return matchesSearch && matchesCategory && matchesBrand
  })

  const handleClearFilters = () => {
    setSearch("")
    setSelectedCategory("All")
    setSelectedBrand("")
  }

  return (
    <>
      <Header />
      <div>

        {/* Breadcrumb */}
        <div className='w-100' style={{ backgroundColor: "#e9e9e9ff" }}>
          <div className='container d-flex justify-content-between pt-3 pb-3 '>
            <div className='fs-5 '>Plywood</div>
            <div>
              <span className='me-3 '>
                <Link className='text-decoration-none text-hover-darkblue ' to={'/'}>Home</Link>
              </span>
              /
              <span className='ms-3'>
                <Link className='text-decoration-none text-hover-darkblue' to={'/plywood'}>Plywood</Link>
              </span>
            </div>
          </div>
        </div>

       {/* Search + Filters */}
<div className="container mt-4">
  <div className="row g-2">
    {/* Search Bar */}
    <div className="col-12 col-md-6">
      <input
        type="text"
        className="form-control"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {/* Clear Filters Button */}
    <div className="col-12 col-md-auto">
      <Button
        variant="outline-secondary"
        className="w-100"
        onClick={handleClearFilters}
      >
        Clear Filters
      </Button>
    </div>
  </div>

  <div className="row mt-3">
    {/* Category Buttons */}
    <div className="col-12 col-lg-9 mb-2">
      <div className="d-flex flex-wrap">
        {categories.slice(0, 4).map((cat, index) => (
          <Button
            key={index}
            variant={selectedCategory === cat ? "primary" : "light"}
            className={`custom-category-btn mt-2 me-2 ${
              selectedCategory === cat ? "text-white fw-bold" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}

        {/* Show more categories only if toggled */}
        {showAll &&
          categories.slice(4).map((cat, index) => (
            <Button
              key={index + 4}
              variant={selectedCategory === cat ? "primary" : "light"}
              className={`custom-category-btn mt-2 me-2 ${
                selectedCategory === cat ? "text-white fw-bold" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}

        {/* Toggle Button */}
        <Button
          className="rounded px-3 mt-2 ms-1 shadow-sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "▲" : "▼"}
        </Button>
      </div>
    </div>

    {/* Brand Dropdown */}
    <div className="col-12 col-lg-3">
      <Dropdown className="w-100">
        <Dropdown.Toggle
          variant=""
          className="rounded border border-0 w-100 shadow-sm"
        >
          {selectedBrand || "Select Brand"}
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-100">
          {brands.map((brand, idx) => (
            <Dropdown.Item
              key={idx}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
</div>


        {/* Product Cards */}
<div className='container mt-5'>
  <div className='row g-3'>
    {filteredProducts.length > 0 ? (
      filteredProducts.map((plywood, idx) => (
        <div 
          key={idx} 
          className='col-12 col-sm-6 col-md-4 col-lg-3 mt-4'
        >
          <ProductCard displayData={plywood} />
        </div>
      ))
    ) : (
      <p className="text-center text-muted mt-5">Currently Out of Stock</p>
    )}
  </div>
</div>

         {/* Our Products Section */}
          <hr className='mt-5 container mb-4' />
          <div className='ms-4'>
  <h3 className="fw-bold mb-4 text-center" style={{ color: "#003366" }}>
    Our Products
  </h3>

  {/* Scrollable Row */}
  <div 
    className="d-flex gap-1 overflow-auto pb-3 px-2"
    style={{ scrollSnapType: "x mandatory" }}
  >
    {randomProducts.length > 0 ? (
      randomProducts.map((item, idx) => (
        <div 
          key={idx} 
          style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}
        >
          <OurProductCard displayData={item} />
        </div>
      ))
    ) : (
      <p className="text-center text-muted">No products to display.</p>
    )}
  </div>
</div>
        {/* Product Categories Section */}
<hr className='mt-5 mb-4 container' />
<div className='container'>
  <h5 className='fw-bold mb-4'>Product Categories</h5>

  {/* Desktop View */}
  <div className="d-none d-md-block">
    <div>
      <h6 className='fw-bold d-inline'>
        <Link className="text-decoration-none text-black" to={'/plywood'}>Plywood</Link>:
      </h6>
      <span className='ms-2 text-muted border-end pe-2'>Plywood</span>
      <span className='ms-1 text-muted border-end pe-2'>MDF</span>
      <span className='ms-1 text-muted border-end pe-2'>Vineer</span>
      <span className='ms-1 text-muted border-end pe-2'>MICA</span>
      <span className='ms-1 text-muted border-end pe-2'>Bison Panel</span>
      <span className='ms-1 text-muted'>Particle Board</span>
    </div>
    <div>
      <h6 className='fw-bold d-inline'>
        <Link className="text-decoration-none text-black" to={'/hardware'}>Hardware</Link>:
      </h6>
      <span className='ms-2 text-muted border-end pe-2'>Locks</span>
      <span className='ms-1 text-muted border-end pe-2'>Hinges</span>
      <span className='ms-1 text-muted'>Handles</span>
    </div>
    <div>
      <h6 className='fw-bold d-inline'>
        <Link className="text-decoration-none text-black" to={'/doors'}>Doors</Link>:
      </h6>
      <span className='ms-2 text-muted border-end pe-2'>Doors</span>
      <span className='ms-1 text-muted'>Door Fittings</span>
    </div>
    <div>
      <h6 className='fw-bold d-inline'>
        <Link className="text-decoration-none text-black" to={'/kitchenfittings'}>Kitchen Fittings</Link>:
      </h6>
      <span className='ms-2 text-muted border-end pe-2'>Kitchen Baskets</span>
      <span className='ms-1 text-muted'>Kitchenware</span>
    </div>
    <div>
      <h6 className='fw-bold d-inline'>
        <Link className="text-decoration-none text-black" to={'/glass'}>Glass</Link>:
      </h6>
      <span className='ms-2 text-muted border-end pe-2'>Glass</span>
      <span className='ms-1 text-muted'>Design Work Glass</span>
    </div>
  </div>

  {/* Mobile View */}
  <div className="d-block d-md-none">
    <div className="mb-3">
      <h6 className="fw-bold"><Link className="text-decoration-none text-black" to={'/plywood'}>Plywood</Link></h6>
      <div className="d-flex flex-wrap gap-2">
        <span className='badge bg-light text-muted'>Plywood</span>
        <span className='badge bg-light text-muted'>MDF</span>
        <span className='badge bg-light text-muted'>Vineer</span>
        <span className='badge bg-light text-muted'>MICA</span>
        <span className='badge bg-light text-muted'>Bison Panel</span>
        <span className='badge bg-light text-muted'>Particle Board</span>
      </div>
    </div>

    <div className="mb-3">
      <h6 className="fw-bold"><Link className="text-decoration-none text-black" to={'/hardware'}>Hardware</Link></h6>
      <div className="d-flex flex-wrap gap-2">
        <span className='badge bg-light text-muted'>Locks</span>
        <span className='badge bg-light text-muted'>Hinges</span>
        <span className='badge bg-light text-muted'>Handles</span>
      </div>
    </div>

    <div className="mb-3">
      <h6 className="fw-bold"><Link className="text-decoration-none text-black" to={'/doors'}>Doors</Link></h6>
      <div className="d-flex flex-wrap gap-2">
        <span className='badge bg-light text-muted'>Doors</span>
        <span className='badge bg-light text-muted'>Door Fittings</span>
      </div>
    </div>

    <div className="mb-3">
      <h6 className="fw-bold"><Link className="text-decoration-none text-black" to={'/kitchenfittings'}>Kitchen Fittings</Link></h6>
      <div className="d-flex flex-wrap gap-2">
        <span className='badge bg-light text-muted'>Kitchen Baskets</span>
        <span className='badge bg-light text-muted'>Kitchenware</span>
      </div>
    </div>

    <div className="mb-3">
      <h6 className="fw-bold"><Link className="text-decoration-none text-black" to={'/glass'}>Glass</Link></h6>
      <div className="d-flex flex-wrap gap-2">
        <span className='badge bg-light text-muted'>Glass</span>
        <span className='badge bg-light text-muted'>Design Work Glass</span>
      </div>
    </div>
  </div>
</div>


       {/* Bulk Orders Section */}
{/* Bulk Orders Section */}
<div className="mt-5">
  <div className="p-5 bg-light rounded shadow-sm text-center bulk-section">
    <h3 
      className="fw-bold mb-3" 
      style={{ color: "#003366", fontSize: "1.8rem" }}
    >
      Looking for Bulk Orders?
    </h3>
    <p 
      className="text-muted mb-4 mx-auto" 
      style={{ maxWidth: "600px", fontSize: "1rem" }}
    >
      Get the best deals on large quantity orders for builders, contractors, and businesses.
    </p>
    <Button 
      variant="primary" 
      className="px-4 py-2 shadow-sm"
      style={{ fontSize: "1rem" }}
      onClick={() => window.open("https://wa.me/919072555257?text=Hello%2C%20I%20am%20interested%20in%20bulk%20orders", "_blank")}
    >
      Contact Us for Bulk Deals
    </Button>
  </div>
</div>


<style jsx>{`
  @media (max-width: 768px) {
    .bulk-section h3 {
      font-size: 1.4rem !important;
    }
    .bulk-section p {
      font-size: 0.9rem !important;
      padding: 0 10px;
    }
    .bulk-section button {
      font-size: 0.9rem !important;
      padding: 0.5rem 1.2rem !important;
    }
  }
`}</style>

      </div>
      <Footer />
    </>
  )
}

export default Plywood
