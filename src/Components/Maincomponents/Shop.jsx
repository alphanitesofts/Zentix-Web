import React from "react";
import { Link } from "react-router-dom";
import shopImg from '../SourceFiles/shop.png'

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
        <h1 className="text-center text-primary mt-5">
          Buy Through Our Category
        </h1>

        <div className="py-5">
          <div id="shop">

            <div className="card card-shadows container" style={{ borderRadius: "10px", cursor: 'not-allowed' }}>

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
                <div className="container-fluid">
                  <div className=" header-carousel position-relative">
                    <div className=" position-relative">
                      <img className="img-fluid Hero-Img" style={{ filter: 'blur(5px)' }} src={shopImg} alt />
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={{ background: "rgba(6, 3, 21, .5)" }}
                      >
                        <div className="ribbon ribbon-top-right">
                          <span>soon!</span>
                        </div>
                        <div className="container">
                          <div className="row justify-content-center text-center">
                            <div className="col-10 col-lg-8">
                              <h3 className="text-primary text-uppercase mb-3 animated slideInDown">
                                SHOP ONLINE
                              </h3>
                              <h1 className="display-3 text-white animated slideInDown mb-4">
                                ZENTIX Best Online Selling Platform
                              </h1>
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
