import React from "react";
import backgroundBanner from '../SourceFiles/mainbannerx.jpg'
import back from '../SourceFiles/back.jpg'

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={7000}>
            <div className="container-fluid p-0 pb-5">
              <div className=" header-carousel position-relative">
                <div className=" position-relative">
                  <img className="img-fluid Hero-Img" style={{ marginTop: '70px' }} src={backgroundBanner} alt />
                  {/* <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(6, 3, 21, .5)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-10 col-lg-8">
                          <h3 className="text-primary text-uppercase mb-3 animated slideInDown">
                            SHOP ONLINE
                          </h3>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            ZANTEX Best Online Selling Platform
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            Groceries
                          </p>
                          <Link
                            to="/Login"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Login
                          </Link>
                          <Link
                            to="/Register"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <div className="container-fluid p-0 pb-5">
              <div className=" header-carousel position-relative ">
                <div className=" position-relative">
                  <img className="img-fluid Hero-Img" style={{ marginTop: '70px' }} src={backgroundBanner} alt />
                  {/* <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(6, 3, 21, .5)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-10 col-lg-8">
                          <h3 className="text-primary text-uppercase mb-3 animated slideInDown">
                            SHOP ONLINE
                          </h3>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            ZANTEX Best Online Selling Platform
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            Groceries
                          </p>
                          <Link
                            to="/Login"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Login
                          </Link>
                          <Link
                            to="/Register"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <div className="container-fluid p-0 pb-5">
              <div className=" header-carousel position-relative ">
                <div className=" position-relative">
                  <img className="img-fluid Hero-Img" style={{ marginTop: '70px' }} src={backgroundBanner} alt />
                  {/* <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style={{ background: "rgba(6, 3, 21, .5)" }}
                  >
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-10 col-lg-8">
                          <h3 className="text-primary text-uppercase mb-3 animated slideInDown">
                            SHOP ONLINE
                          </h3>
                          <h1 className="display-3 text-white animated slideInDown mb-4">
                            ZANTEX Best Online Selling Platform
                          </h1>
                          <p className="fs-5 fw-medium text-white mb-4 pb-2">
                            Groceries
                          </p>
                          <Link
                            to="/Login"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Login
                          </Link>
                          <Link
                            to="/Register"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <div className="chero">
            <i
              className="fa-solid fa-chevron-left"
              style={{ color: "red", marginTop: "23px", fontSize: "15px" }}
            />
          </div>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <div className="cheros">
            <i
              className="fa-solid fa-chevron-right"
              style={{ color: "red", marginTop: "23px", fontSize: "15px" }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
