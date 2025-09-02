import { useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/horizon.jpg'
import img2 from '../assets/itachi.jpg'
import img3 from '../assets/miles.jpg'
import hardware from '../assets/hardware_locks-removebg-preview.png'
import plywood from '../assets/plywood.png'
import glass from '../assets/glassdoor.png'
import door from '../assets/doors-removebg-preview.png'
import kitchen from '../assets/kitchenfittings-removebg-preview.png'
import { Link } from 'react-router-dom';
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgwhoweare from '../assets/chelari-tradings_gallery3.jpg'
import ProductCard from '../components/ProductCard';
import { Card } from 'react-bootstrap'
import kitchenFittings from '../assets/modular kitchen.jpg'
import plywoodHome from '../assets/plywood home.jpg'
import glassHome from '../assets/glasshome.jpg'
import doorHome from '../assets/doorsHome.jpg'
import locksHome from '../assets/locksHome.jpg'
import firstcarousal from '../assets/firstcarousal.png'
import secondcarousal from '../assets/secondcarousal.png'
import thirdcarousal from '../assets/thirdcarousal.png'
import fourthcarousal from '../assets/fourthcarousal.png'
import ProductDetails from '../components/ProductDetails';
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.jpg'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.jpg'
import brand6 from '../assets/brand6.jpg'
import brand7 from '../assets/brand7.jpg'
import brand8 from '../assets/brand8.jpg'
import brand9 from '../assets/brand9.jpg'
import brand10 from '../assets/brand10.jpg'
import frontimg from '../assets/frontimg.png'
import brand11 from '../assets/brand11.jpg'
import brand12 from '../assets/brand12.jpg'
import brand13 from '../assets/brand13.jpg'
import brand14 from '../assets/brand14.jpg'
import brand15 from '../assets/brand15.jpg'
import brand16 from '../assets/brand16.jpg'
import brand17 from '../assets/brand17.jpg'
import brand18 from '../assets/brand18.jpg'
import brand19 from '../assets/brand19.jpg'
import brand20 from '../assets/brand20.jpg'
import brand21 from '../assets/brand21.jpg'






// icons
import { FaLock, FaUtensils, FaDoorClosed } from "react-icons/fa";
import { getHomeProductsApi } from '../services/allAPI';
import { addResponseContext } from '../contexts/ContextApi';




function Home() {

  const {addResponse,setAddResponse}=useContext(addResponseContext)

  const [homeProducts,setHomeProducts]=useState([])
  console.log(homeProducts);
  

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }


  useEffect(() => {

    getHomeProducts()
    
  }, [addResponse])
  




  const getHomeProducts=async()=>{
    try {

      const result=await getHomeProductsApi()
      // console.log(result);
      setHomeProducts(result.data)
      
      
    } catch (err) {
      console.log(err);
      
      
    }
  }


  // new section data
  const categories = [
    {
  id: 1,
  title: "Locks & Hardwares",
  desc: "Secure your spaces with durable locks and premium hardware designed for lasting strength and modern style.",
  icon: <FaLock size={35} color="#f4f4f4ff" />, // Lock icon for relevance
  img: firstcarousal, // replace with actual lock/hardware image
  link: "/hardware"
},
    {
  id: 2,
  title: "Kitchen Accessories",
  desc: "Enhance your kitchen with premium accessories designed for smart storage, effortless cooking, and timeless style.",
  icon: <FaUtensils size={35} color="#f4f4f4ff" />, // utensils icon
  img: secondcarousal, // replace with actual kitchen accessories image
  link: "/kitchenfittings"
},
    {
  id: 3,
  title: "Quality Doors",
  desc: "Explore premium doors crafted for strength, durability, and style—designed to protect while enhancing the beauty of your spaces.",
  icon: <FaDoorClosed size={35} color="#f4f4f4ff" />, // door icon
  img: thirdcarousal, // replace with actual doors image
  link: "/doors"
},
  ];


  



  return (
    <>
      <Header/>

      {/* ===== Carousel with Overlay & Taller Height ===== */}
<div className="bg-secondary position-relative">
  <Carousel
    fade
    activeIndex={index}
    onSelect={handleSelect}
    interval={3000}
    pause={false}
    indicators={false}
    controls={false}
  >
    {/* Slide 1 */}
    <Carousel.Item>
      <div className="position-relative">
        <img
          key={index}
          src={firstcarousal}
          className="d-block w-100 carousel-image carousel-zoom"
          style={{
            objectFit: "cover",
            height: "60vh", // relative height for responsiveness
            transition: "transform 8s ease-in-out"
          }}
          alt="Plumbing & Sanitarywares"
        />
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        />
        {/* Caption */}
        <div className="carousel-caption text-start d-flex flex-column align-items-start fade-slide-in custom-caption">
          <h1 className="fw-bold text-white display-4 poppins-regular caption-title">
            Your Trusted Partner <br /> in Hardware & Home Solutions
          </h1>
          <p className="text-white fs-5 poppins-regular caption-text">
            Quality products, unbeatable prices, and reliable service since 1998
          </p>
        </div>
      </div>
    </Carousel.Item>

    {/* Slide 2 */}
    <Carousel.Item>
      <div className="position-relative">
        <img
          key={index}
          src={secondcarousal}
          className="d-block w-100 carousel-image carousel-zoom"
          style={{ objectFit: "cover", height: "60vh", transition: "transform 8s ease-in-out" }}
          alt="Electricals"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div className="carousel-caption text-start d-flex flex-column align-items-start fade-slide-in custom-caption">
          <h1 className="fw-bold text-white display-4 poppins-regular caption-title">Where Flames Meet Freshness</h1>
          <p className="text-white fs-5 poppins-regular caption-text">Hobs for precision, hoods for purity</p>
        </div>
      </div>
    </Carousel.Item>

    {/* Slide 3 */}
    <Carousel.Item>
      <div className="position-relative">
        <img
          key={index}
          src={thirdcarousal}
          className="d-block w-100 carousel-image carousel-zoom"
          style={{ objectFit: "cover", height: "60vh", transition: "transform 8s ease-in-out" }}
          alt="Fans & Lights"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div className="carousel-caption text-start d-flex flex-column align-items-start fade-slide-in custom-caption">
          <h1 className="fw-bold text-white display-4 poppins-regular caption-title">Luxury in Your Grip</h1>
          <p className="text-white fs-5 poppins-regular caption-text">Blending durability with elegance</p>
        </div>
      </div>
    </Carousel.Item>

    {/* Slide 4 */}
    <Carousel.Item>
      <div className="position-relative">
        <img
          key={index}
          src={fourthcarousal}
          className="d-block w-100 carousel-image carousel-zoom"
          style={{ objectFit: "cover", height: "60vh", transition: "transform 8s ease-in-out" }}
          alt="Doors & Hardware"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div className="carousel-caption text-start d-flex flex-column align-items-start fade-slide-in custom-caption">
          <h1 className="fw-bold text-white display-4 poppins-regular caption-title">Crafted for Modern Living</h1>
          <p className="text-white fs-5 poppins-regular caption-text">Premium fittings crafted with precision</p>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</div>



            {/* ===== New Section: Categories with Hover Effect ===== */}
<div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container-fluid px-3">
    <div className="row g-4">
      {categories.map(cat => (
        <div key={cat.id} className="col-12 col-sm-6 col-lg-4">
          <div
            className="h-100 d-flex flex-column"
            style={{
              borderRadius: "3px",
              overflow: "hidden",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              backgroundColor: "#fff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
          >
            {/* Top Image with Zoom */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={cat.img}
                alt={cat.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            {/* Content */}
            <div
              className="flex-grow-1 d-flex flex-column justify-content-between poppins-regular"
              style={{
                padding: "20px",
                backgroundColor: "#012243ff",
                color: "#fff",
              }}
            >
              <div>
                <div className="mb-3">{cat.icon}</div>
                <h5 className="fw-bold">{cat.title}</h5>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#ccc",
                    minHeight: "90px",
                  }}
                >
                  {cat.desc}
                </p>
              </div>

              <div className="mt-3">
                <Link
                  to={cat.link}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#f4f4f4ff",
                  }}
                >
                  VIEW MORE PRODUCTS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


{/* ===== Who We Are ===== */}
<div className="py-5" style={{ backgroundColor: "#fff" }}>
  <div className="container">
    {/* Section Heading */}
    <div className="text-center mb-5">
      <h2
        className="fw-bold poppins-regular"
        style={{ color: "#003366", fontSize: "clamp(20px, 2vw, 32px)" }}
      >
        Who We Are
      </h2>
      <div
        className="mx-auto mt-3"
        style={{
          width: "120px",
          height: "4px",
          backgroundColor: "#003366",
          borderRadius: "2px",
        }}
      ></div>
      <p
        className="mt-3 poppins-regular"
        style={{
          fontSize: "clamp(14px, 1.6vw, 16px)",
          color: "#003366",
          lineHeight: "1.6",
        }}
      >
        Building trust since <strong>1998</strong> with premium{" "}
        <strong>hardware, doors, plywood</strong>, and{" "}
        <strong>furnishing solutions</strong>.
      </p>
    </div>

    {/* Content Row */}
    <div className="row align-items-center">
      {/* Left: Text */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <h4
          className="fw-bold mb-3 poppins-regular"
          style={{
            color: "#003366",
            fontSize: "clamp(18px, 2vw, 24px)",
          }}
        >
          26+ Years of Excellence
        </h4>
        <p
          className="poppins-regular"
          style={{
            color: "#003366",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            lineHeight: "1.6",
          }}
        >
          At <span className="fw-bold">Chelari Tradings</span>, we believe in more
          than just selling products — we deliver{" "}
          <span className="fw-bold">reliability, design, and innovation</span>. With
          decades of expertise, we’ve become a one-stop solution for{" "}
          <span className="fw-bold">builders, architects, and households</span>.
        </p>

        {/* Feature Highlights */}
        <div className="row">
          <div className="col-6 mb-3 fw-bold text-primary poppins-regular d-flex align-items-center">
            <i
              className="fas fa-tools me-2"
              style={{ color: "#003366", fontSize: "18px" }}
            ></i>
            <span className="small">Premium Hardware</span>
          </div>
          <div className="col-6 mb-3 fw-bold text-primary poppins-regular d-flex align-items-center">
            <i
              className="fas fa-door-open me-2"
              style={{ color: "#003366", fontSize: "18px" }}
            ></i>
            <span className="small">Quality Doors</span>
          </div>
          <div className="col-6 mb-3 fw-bold text-primary poppins-regular d-flex align-items-center">
            <i
              className="fas fa-couch me-2"
              style={{ color: "#003366", fontSize: "18px" }}
            ></i>
            <span className="small">Stylish Furnishings</span>
          </div>
          <div className="col-6 mb-3 fw-bold text-primary poppins-regular d-flex align-items-center">
            <i
              className="fas fa-handshake me-2"
              style={{ color: "#003366", fontSize: "18px" }}
            ></i>
            <span className="small">Trusted Partnerships</span>
          </div>
        </div>

        <Link
          to="/hardware"
          className="btn btn-lg fw-bold text-white px-4 py-2 mt-3 shadow w-100 w-md-auto"
          style={{ backgroundColor: "#003366", borderRadius: "30px" }}
        >
          <span className="poppins-regular">Explore Our Products →</span>
        </Link>
      </div>

      {/* Right: Image */}
      <div className="col-lg-6">
        <div className="rounded-4 overflow-hidden shadow-lg">
          <img
            src={frontimg}
            alt="About Chelari Tradings"
            className="img-fluid w-100"
            style={{
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
    </div>
  </div>
</div>



      

      {/* ===== Featured Products ===== */}
<div className="py-5">
  <h3 className="text-center fw-bold poppins-regular" style={{ color: "#003366" }}>
    Featured Products
  </h3>
  <div
    className="mx-auto my-2 mb-4 "
    style={{
      width: "150px",
      height: "4px",
      backgroundColor: "#003366",
      borderRadius: "2px",
    }}
  ></div>

  <div className="container-fluid position-relative">
    {/* Left Arrow */}
    <button
      className="carousel-btn left poppins-regular"
      onClick={() =>
        document.getElementById("slider").scrollBy({ left: -350, behavior: "smooth" })
      }
    >
      ◀
    </button>

    {/* Slider */}
    <div
      id="slider"
      className="product-slider d-flex overflow-auto gap-4 pb-3 "
    >
      {homeProducts?.length > 0 &&
        homeProducts?.map((products, index) => (
          <div key={index} style={{ flex: "0 0 auto" }}>
            <ProductCard displayData={products} />
          </div>
        ))}
    </div>

    {/* Right Arrow */}
    <button
      className="carousel-btn right poppins-regular"
      onClick={() =>
        document.getElementById("slider").scrollBy({ left: 350, behavior: "smooth" })
      }
    >
      ▶
    </button>
  </div>
</div>


     
          
    
{/* ===== Range of Products Carousel ===== */}
<div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="">
    
    <h3 className="text-center fw-bold mb-4 poppins-regular" style={{ color: "#003366" }}>
      Range of Products
      <div
        className="mx-auto mt-2"
        style={{
          width: "120px",
          height: "4px",
          backgroundColor: "#003366",
          borderRadius: "2px",
        }}
      ></div> 
    </h3>

    <div className="slider-container">
      <div className="slider-track">
        {[
          { img: locksHome, title: "Hardware", link: "/hardware" },
          { img: plywoodHome, title: "Plywood", link: "/plywood" },
          { img: glassHome, title: "Glass", link: "/glass" },
          { img: kitchenFittings, title: "Kitchen Fittings", link: "/kitchenfittings" },
          { img: doorHome, title: "Doors", link: "/doors" },
          // duplicate for infinite loop
          { img: locksHome, title: "Hardware", link: "/hardware" },
          { img: plywoodHome, title: "Plywood", link: "/plywood" },
          { img: glassHome, title: "Glass", link: "/glass" },
          { img: kitchenFittings, title: "Kitchen Fittings", link: "/kitchenfittings" },
          { img: doorHome, title: "Doors", link: "/doors" },
        ].map((item, index) => (
          <div
            key={index}
            className="slider-item"
            onClick={() => window.location.href = item.link}
          >
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h4>{item.title}</h4>
              <p>Click to explore our {item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      
      
{/* ===== Our Trusted Partners ===== */}
<div className="w-100 py-5">
  <div className="container text-center">
    <h2 
      className="fw-bold mb-4" 
      style={{ color: "#003366", fontFamily: "'Poppins', sans-serif" }}
    >
      Our Trusted Partners
      <div
        className="mx-auto mt-2"
        style={{
          width: "120px",
          height: "4px",
          backgroundColor: "#003366",
          borderRadius: "2px",
        }}
      ></div>
    </h2>

    <div 
      className="trusted-partners-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "30px",
        justifyItems: "center",
        alignItems: "center",
        marginTop: "30px",
        marginBottom: "30px"
      }}
    >
      <img src={brand1} alt="Brand 1" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand2} alt="Brand 2" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand3} alt="Brand 3" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand4} alt="Brand 4" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />

      <img src={brand8} alt="Brand 8" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand6} alt="Brand 6" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand12} alt="Brand 12" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand5} alt="Brand 5" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />

      <img src={brand9} alt="Brand 9" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand10} alt="Brand 10" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand11} alt="Brand 11" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand7} alt="Brand 7" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand13} alt="Brand 13" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand17} alt="Brand 17" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand15} alt="Brand 15" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand16} alt="Brand 16" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand14} alt="Brand 14" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand18} alt="Brand 18" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand19} alt="Brand 19" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand21} alt="Brand 21" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />
      <img src={brand20} alt="Brand 20" style={{ height: "100px", objectFit: "contain", maxWidth: "100%" }} />

    </div>
  </div>
</div>





{/* ===== We Make Buying Easy Section ===== */}
<div className='w-100 py-5' style={{ backgroundColor: "#f8f9fa", fontFamily: "'Poppins', sans-serif" }}>
  <div className="container text-center px-4">
    <h2 className='fw-bold mb-4' style={{ color: "#003366" }}>
      We Make Buying Easy
      <div
        className="mx-auto mt-2"
        style={{
          width: "120px",
          height: "4px",
          backgroundColor: "#003366",
          borderRadius: "2px",
        }}
      ></div>
    </h2>
    <p className='mb-5' style={{ fontSize: "1.1rem", color: "#555" }}>
      Simplifying your purchase experience with convenience, reliability, and trust.
    </p>

    {/* Responsive grid */}
    <div className="row g-4">
      
      <div className="col-12 col-md-6 col-lg-3">
        <div className='text-center px-3'>
          <i className="fa-solid fa-magnifying-glass fs-2 text-primary mb-2"></i>
          <h4 className='fw-bold mb-1'>Easy Product Search</h4>
          <p style={{ color: "#555" }}>Find the right products quickly and effortlessly.</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className='text-center px-3'>
          <i className="fa-solid fa-hand-holding-dollar fs-2 text-success mb-2"></i>
          <h4 className='fw-bold mb-1'>Transparent Pricing</h4>
          <p style={{ color: "#555" }}>Know what you pay with clear and honest pricing.</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className='text-center px-3'>
          <i className="fa-solid fa-truck fs-2 text-warning mb-2"></i>
          <h4 className='fw-bold mb-1'>Fast Delivery</h4>
          <p style={{ color: "#555" }}>Get your products delivered safely to your doorstep.</p>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className='text-center px-3'>
          <i className="fa-solid fa-thumbs-up fs-2 text-danger mb-2"></i>
          <h4 className='fw-bold mb-1'>Customer Satisfaction</h4>
          <p style={{ color: "#555" }}>We ensure a smooth and satisfying buying experience.</p>
        </div>
      </div>

    </div>
  </div>
</div>







      <Footer/>
    </>
  )
}

export default Home
