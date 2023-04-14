import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../SourceFiles/logo_white.jpeg'

const Navbar = () => {
  const [index, setindex] = useState(0)

  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-2 border-bottom border-primary fixed-top p-0">
        <a onClick={() => setindex(0)}
          className="navbar-brand d-flex align-items-center px-4 ms-5 px-lg-5"
        >
          <img src={logo} style={{height:'50px'}} alt="" />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a onClick={() => setindex(0)} className={index === 0 ? 'nav-item nav-link active-page' : 'nav-item nav-link '}> <Link to="/">
              HOME
            </Link>
            </a>
            <a onClick={() => setindex(1)} className={index === 1 ? 'nav-item nav-link' : 'nav-item nav-link active-page'}> <Link to="/shop">
              SHOP
            </Link>
            </a>
            <Link to="/About" className="nav-item nav-link">
              ABOUT
            </Link>
            <Link to="/marketing-tool" className="nav-item nav-link">
              MARKETING TOOL
            </Link>
            <Link to="/faq" className="nav-item nav-link">
              FAQ
            </Link>
            <Link to="/contact-us" className="nav-item nav-link">
              Contact
            </Link>
            <div style={{ marginRight: "90px" }} className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                More
              </a>
              <div className="dropdown-menu fade-up m-0">
                <a  href="https://userdashboard.zentix.asia" target={"_blank"} className="dropdown-item">
                  Login
                </a>
                <a href="https://userdashboard.zentix.asia" target={"_blank"}  className="dropdown-item">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
