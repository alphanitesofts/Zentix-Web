import React from 'react'

const Navbar = () => {


  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-2 border-bottom border-primary fixed-top p-0">
      <a href="#" className="navbar-brand  d-flex align-items-center px-4 ms-5 px-lg-5">
          <h2 className="mb-2 text-primary">Zantex</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link">About</a>
            <a href="#services" className="nav-item nav-link">Services</a>
            <a href="#contact" className="nav-item nav-link">Contact</a>
            <div style={{marginRight:'90px'}}  className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
              <div className="dropdown-menu fade-up m-0">
                <a href="#pricing" className="dropdown-item">Pricing Plan</a>
                <a href="#features" className="dropdown-item">Features</a>
                <a href="#team" className="dropdown-item">Our Team</a>
                <a href="#testimonial" className="dropdown-item">Testimonial</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

    </div>
  )
}

export default Navbar