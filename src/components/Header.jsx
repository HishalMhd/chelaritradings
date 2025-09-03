import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container, Fade } from 'react-bootstrap'
import logo from '../assets/logochelari-removebg-preview.png'
import '../App.css'

function Header() {
  const [showDropdown, setShowDropdown] = useState(false)
  const closeTimeout = useRef(null) // store timeout ID

  const handleMouseEnter = () => {
    if (window.innerWidth > 992) {
      clearTimeout(closeTimeout.current) // cancel any pending close
      setShowDropdown(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) {
      // delay closing by 300ms
      closeTimeout.current = setTimeout(() => setShowDropdown(false), 300)
    }
  }

  return (
    <>
      {/* Top Info Bar (Desktop only) */}
<div className="w-100 text-white py-2 d-none d-lg-block" style={{ backgroundColor: '#003366' }}>
  <div className="container">
    <div className="row text-center text-md-start align-items-center">
      <div className="col-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
        <i className="fa-solid fa-location-dot me-2"></i>
        <a
          href="https://www.google.com/maps?q=Chelari+Tradings,+Thazhe+Chelari,+676317,+Kerala,+India"
          className="text-white text-decoration-none small"
        >
          Chelari Tradings, Thazhe Chelari, 676317, Kerala, India
        </a>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-envelope me-2"></i>
        <a className="text-white small" href="mailto:info@chelaritradings.com">
          info@chelaritradings.com
        </a>
      </div>
      <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center flex-wrap">
        <span className="me-2 small">Follow us:</span>
        <a href="#" className="text-white mx-2 fs-6"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-white mx-2 fs-6"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white mx-2 fs-6"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</div>


      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" className="p-0" style={{ backgroundColor: '#fff' }}>
        <Container fluid className="px-0  custom-logo" style={{marginLeft:"-40px"}} >
          <Navbar.Brand className="m-0 p-0 custom-logo">
            <Link to="/" className="logo-link">
              <img src={logo} style={{ height: '60px', width: 'auto' }} alt="Chelari Tradings Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-3">
              <Nav.Link as={Link} to="/aboutus" style={{ color: '#003366' }} className="fw-bold">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus" style={{ color: '#003366' }} className="fw-bold">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/gallery" style={{ color: '#003366' }} className="fw-bold">Gallery</Nav.Link>

              {/* Dropdown */}
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <NavDropdown
                  show={showDropdown}
                  title={<span style={{ color: '#003366' }} className="fw-bold">Our Products</span>}
                  id="collapsible-nav-dropdown"
                  menuVariant="dark"
                  className="rounded"
                  onClick={() => window.innerWidth <= 992 && setShowDropdown(!showDropdown)}
                >
                  <Fade in={showDropdown} timeout={300}>
                    <div className="dropdown-custom-menu">
                      <NavDropdown.Item as={Link} to="/plywood"><span className="text-white fw-bold">Plywood</span></NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/hardware"><span className="text-white fw-bold">Hardware</span></NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/doors"><span className="text-white fw-bold">Doors</span></NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/kitchenfittings"><span className="text-white fw-bold">Kitchen Fittings</span></NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/glass"><span className="text-white fw-bold">Glass</span></NavDropdown.Item>
                      <hr />
                      <NavDropdown.Item as={Link} to="/admin"><span className="text-white fw-bold">Admin</span></NavDropdown.Item>
                    </div>
                  </Fade>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
