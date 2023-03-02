import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <div className="container-fluid p-0 pb-5">
              <div className=" header-carousel position-relative mb-5">
                <div className=" position-relative">
                  <img className="img-fluid heroImg" src="img/truck2.jpg" alt />
                  <div
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
                          <a
                            href="#facts"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                            style={{borderRadius:'10px'}}
                          >
                            Read More
                          </a>
                          <a
                            href="#facts"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
          <div className="container-fluid p-0 pb-5">
              <div className=" header-carousel position-relative mb-5">
                <div className=" position-relative">
                  <img className="img-fluid heroImg" src="img/truck2.jpg" alt />
                  <div
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
                          <a
                            href="#facts"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                            style={{borderRadius:'10px'}}
                          >
                            Read More
                          </a>
                          <a
                            href="#facts"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="container-fluid p-0 pb-5">
              <div className=" header-carousel position-relative mb-5">
                <div className=" position-relative">
                  <img className="img-fluid heroImg" src="img/truck2.jpg" alt />
                  <div
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
                          <a
                            href="#facts"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                            style={{borderRadius:'10px'}}
                          >
                            Read More
                          </a>
                          <a
                            href="#facts"
                            className="btn btn-outline-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
              className="fa-solid fa-chevron-left mt-3"
              style={{ color: "red" }}
            />
          </div>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <div className="cheros">
            <i
              className="fa-solid fa-chevron-right mt-3"
              style={{ color: "red" }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
