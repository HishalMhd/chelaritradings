import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'



function Gallery() {
  return (
    <>
    <Header/>
    <div className='w-100' style={{ backgroundColor: "#e9e9e9ff" }}>
        <div className='container d-flex justify-content-between pt-3 pb-3 '>
          <div className='fs-5 '>
            Gallery
          </div>
          <div>
            <span className='me-3'>
              <Link className='text-decoration-none text-hover-darkblue' to={'/'}>Home</Link>
            </span> /
            <span className='ms-3'>
              <Link className='text-decoration-none text-hover-darkblue' to={'/gallery'}>Gallery</Link>
            </span>
          </div>
        </div>
      </div>
    <Footer/>
    </>
    
  )
}

export default Gallery