import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <div className="pageHeading">
        <div className="text-center" style={{ paddingTop: "170px" }}>
          <h1 className="text-white" style={{ fontSize: "60px" }}>
            SHOP
          </h1>
          <h4 className="text-white">Home ● Shop</h4>
        </div>
      </div>
      <div className="">
        <h1 className="text-center text-secondary mt-5">
          Buy Through Our Category
        </h1>
        <h4 className="text-center text-primary p-3">
          You can browse through our category to see our lates products
        </h4>
        <div className="row p-2 mt-5 d-flex justify-content-center">
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card ">
              <div className="card-body text-center text-center">
                <i className="fa-solid fa-3x fa-shopping-cart" />
                <h4 className="mt-3">All</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card">
              <div className="card-body text-center">
                <i className="fa-solid fa-3x fa-shirt" />
                <h4 className="mt-3">Clothes</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card">
              <div className="card-body text-center">
                <i className="fa-solid fa-3x fa-mobile" />
                <h4 className="mt-3">Electronics</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card">
              <div className="card-body text-center">
                <i className="fa-solid fa-3x fa-book" />
                <h4 className="mt-3">Books</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row p-2 d-flex justify-content-center"
          style={{ marginBottom: "50px" }}
        >
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card ">
              <div className="card-body text-center text-center">
                <i className="fa-solid fa-3x fa-2x fa-gem" />
                <h4 className="mt-3">Beauty</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card">
              <div className="card-body text-center">
                <i className="fa-solid fa-3x fa-house" />
                <h4 className="mt-3">Home</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card">
              <div className="card-body text-center">
                <i className="fa-solid fa-3x fa-gamepad" />
                <h4 className="mt-3">Children</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="card m-2 categories-card">
              <div className="card-body text-center">
                <i className="fa-solid fa-3x fa-headphones" />
                <h4 className="mt-3">Accesories</h4>
                <div className="icon-button">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div id="shop">
            <div className="card card-shadows container" style={{ borderRadius: "10px" }}>
              <div className="card-body py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h1 className="text-secondary">Our Products</h1>
                  <p
                    className="mb-5"
                    style={{ fontWeight: "normal", fontSize: "20px" }}
                  >
                    Welcome! Please check our products here...
                  </p>
                </div>
                <div className="row g-4">
                  <div
                    className="col-lg-3 cardx wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="team-item p-4">
                      <div className="overflow-hidden mb-4">
                        <img className="img-fluid" src="img/about.jpg" alt />
                      </div>
                      <div className="m-2">
                        <h4 className="mb-2 title-card">Smart Watch</h4>
                        <div className="d-flex">
                          <div>
                            <p className="mt-0 mb-0">
                              <b>Category</b>
                            </p>
                            <p className="mt-0 mb-0">Accessories</p>
                          </div>
                          <div className="ms-auto">
                            <p className="mt-0 mb-0">
                              <b>Price</b>
                            </p>
                            <p className="mt-0 mb-0">1799</p>
                          </div>
                        </div>
                        <p></p>
                      </div>
                      <div className="btn-slide mt-1">
                        <i className="fa fa-share" />
                        <span>
                          <Link to='/buy-item'>
                            <i className="fa-solid fa-cart-shopping" />
                            &nbsp;<span>View</span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
