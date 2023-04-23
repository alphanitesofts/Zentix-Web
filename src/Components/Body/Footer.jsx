import React from "react";
import logo from '../SourceFiles/logo_black.jpeg'
const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ marginTop: "6rem" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <img src={logo} style={{ height: '60px', width: '200px' }} className="mx-auto" alt="" />
            <div className="col-lg-12">

              <div className="col-lg-6 mx-auto">
                <p className="text-center ">
                  We are a worldwide trusted company . This secured website with
                  a user-friendly interface and support of various languages is
                  a breeze to use. Additionally, this site has both desktop and
                  mobile.
                </p>
              </div>

              <div className="d-flex justify-content-center">
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-12 text-center mb-3 mb-md-0">
                Copyright © 2023. All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
};

export default Footer;
