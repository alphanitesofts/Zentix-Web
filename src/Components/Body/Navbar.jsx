import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-2 border-bottom border-primary fixed-top p-0">
        <a
          href="#"
          className="navbar-brand  d-flex align-items-center px-4 ms-5 px-lg-5"
        >
          <h2 className="mb-2 text-primary">Zantex</h2>
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
            <Link to="/" className="nav-item nav-link active">
              HOME
            </Link>
            <Link to="/shop" className="nav-item nav-link">
              SHOP
            </Link>
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
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                More
              </a>
              <div className="dropdown-menu fade-up m-0">
                <a href="#" className="dropdown-item">
                  Login
                </a>
                <a href="#" className="dropdown-item">
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
