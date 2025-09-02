import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <>
      <Header />
      <div className='w-100' style={{ backgroundColor: "#e9e9e9ff" }}>
        <div className='container d-flex justify-content-between pt-3 pb-3 '>
          <div className='fs-5 '>
            Contact Us
          </div>
          <div>
            <span className='me-3'>
              <Link className='text-decoration-none text-hover-darkblue' to={'/'}>Home</Link>
            </span> /
            <span className='ms-3'>
              <Link className='text-decoration-none text-hover-darkblue' to={'/contactus'}>Contact Us</Link>
            </span>
          </div>
        </div>
      </div>

      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h4 className='mb-3' style={{color:"#003366"}}>Get in Touch</h4>
            <ul className='list-unstyled fs-6'>
              <li className='mb-3'>
                <i style={{color:"#003366"}} className="fas fa-map-marker-alt me-2 text-primary"></i>
                <strong style={{color:"#003366"}}>Address:</strong><br />
                <span className='text-muted'>
                  CHELARI TRADINGS<br />
                THAZHE CHELARI, VELIMUKKU P.O<br />
                MALAPPURAM, KERALA
                </span>
              </li>
              <li className='mb-3'>
                <i style={{color:"#003366"}} className="fas fa-phone-alt me-2 text-primary"></i>
                <strong style={{color:"#003366"}}>Call:</strong><br />
                <a className='text-muted  ' style={{textDecoration:"none"}} href="tel:+91 9072 555 257">+91 9072 555 257</a><br />
                <a className='text-muted' style={{textDecoration:"none"}}  href="tel:+91 9847 555 257">+91 9847 555 257</a>
              </li>
              <li className='mb-3'>
                <i style={{color:"#003366"}} className="fas fa-code-branch me-2 text-primary"></i>
                <strong style={{color:"#003366"}}>Branches:</strong><br />
                <span className='text-muted'>
                  KUNNUMPURAM<br />
                CHELARI
                </span>
              </li>
              <li className='mb-3 '>
                <i style={{color:"#003366"}} className="fas fa-envelope me-2 text-primary"></i>
                <strong style={{color:"#003366"}}>Email:</strong><br />
                <span className='text-muted'>
                  info@chelaritradings.com<br />
                chelaritradings@gmail.com
                </span>
              </li>
            </ul>
          </div>

          <div className='col-md-6'>
            <h4 className='mb-4' style={{color:"#003366"}}>Send Us a Message</h4>
            <form >
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Your Name' />
              </div>
              <div className='mb-3'>
                <input type="email" className='form-control' placeholder='Your Email' />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Subject' />
              </div>
              <div className='mb-3'>
                <textarea className='form-control' rows="4" placeholder='Your Message'></textarea>
              </div>
              <div className=' text-end'>
                <a 
  href="mailto:info@chelaritradings.com?subject=Contact%20Us&body=Hello%2C%20I%20want%20to%20inquire%20about..."
  className="btn btn-primary px-4"
>
  Send Message
</a>
              </div>
            </form>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-12'>
            <iframe
              title='Chelari Tradings Location'
              src="https://www.google.com/maps?q=Thazhe+Chelari,+Velimukku,+Kerala&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
