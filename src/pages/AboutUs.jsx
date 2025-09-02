import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'




function AboutUs() {
  return (
    <>
      <Header />
      <div className='w-100' style={{ backgroundColor: "#e9e9e9ff" }}>
        <div className='container d-flex justify-content-between pt-3 pb-3 '>
          <div className='fs-5 '>

            About Us

          </div>
          <div className=''>
            <span className='me-3 '><Link className='text-decoration-none text-hover-darkblue ' to={'/'}>Home</Link></span>/<span className='ms-3'><Link className='text-decoration-none text-hover-darkblue' to={'/aboutus'}>About Us</Link></span>
          </div>
        </div>




      </div>




      <div className='container'>
        <div className='text-center mt-4'>
        <h3 className='d-inline'>Welcome to </h3><h3 className='d-inline'><Link className='text-decoration-none ' style={{ color: "#003366" }}>Chelari Tradings</Link></h3>
      </div>
      <div>
    <h6 className='mt-3 text-muted'>
      The strive for excellence and customer satisfaction made us stand tall way back in 1999, 
      when we made a humble beginning by starting a showroom named <strong>Chelari Traders</strong>. 
      With the influence of Gulf countries on Kerala, especially Malappuram district, we were quick to adapt 
      to the quality and innovations required for infrastructural projects. Our dedicated workforce and 
      transparent business dealings helped us expand our clientele in no time.
      <br /><br />
      We consistently met bulk demands on time, every time. This dedication paved the way for us to introduce 
      exclusive high-end, globally recognized brands in hardware, plywood, glass, and more. 
      Our bold decision to invest in Modular Kitchen Accessories from world-renowned brands like 
      <strong> Olive</strong> and <strong>Hettich</strong>, supported by a team of experienced and skilled personnel, 
      ensured that we maintained international quality standards in every project.
      <br /><br />
      Today, we proudly associate with leading firms from diverse sectors such as Hospitality, Retail, Real Estate, 
      IT, and Health Care. Over the years, we have built a reputation not just as suppliers, but as partners in 
      our clients’ success stories.
      <br /><br />
      At Chelari Tradings, we believe in evolving with the times. Our product range keeps growing to meet 
      changing market needs, from traditional hardware solutions to cutting-edge interior accessories. 
      Whether you are building a home, designing a commercial space, or upgrading interiors, 
      we are here to provide products that combine functionality, durability, and style.
      <br /><br />
      <em>Our mission is simple — to bring the best products from around the world to our customers’ doorsteps 
      while maintaining honesty, reliability, and unmatched service quality.</em>
    </h6>
  </div>

  
  <div className='mt-5'>
    <h4 className='text-center mb-5' style={{ color: "#003366" }}>Why Choose Us</h4>
    <div className='row text-center'>
      <div className='col-md-4 mb-4'>
        <i className="fa-solid fa-award fs-1 mb-3" style={{ color: "#003366" }}></i>
        <h5>25+ Years of Experience</h5>
        <p className='text-muted'>We have been serving customers since 1999 with unmatched expertise in the hardware industry.</p>
      </div>
      <div className='col-md-4 mb-4'>
        <i className="fa-solid fa-box-open fs-1 mb-3" style={{ color: "#003366" }}></i>
        <h5>Wide Product Range</h5>
        <p className='text-muted'>From hardware to modular kitchens, we provide solutions for homes, offices, and commercial spaces.</p>
      </div>
      <div className='col-md-4 mb-4'>
        <i className="fa-solid fa-handshake fs-1 mb-3" style={{ color: "#003366" }}></i>
        <h5>Trusted by Thousands</h5>
        <p className='text-muted'>Our commitment to quality and service has earned us the trust of clients across multiple sectors.</p>
      </div>
    </div>
  </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs