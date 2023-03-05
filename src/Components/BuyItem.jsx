import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BuyItem = () => {
  const [addCount, setAddCount] = useState(1);

  const incrementCount = () => {
    setAddCount(addCount + 1);
  };
  const decrementCount = () => {
    setAddCount(addCount - 1);
  };
  return (
    <div>
      <div className="pageHeading">
        <div className="text-center" style={{ paddingTop: "170px" }}>
          <h1 className="text-white" style={{ fontSize: "60px" }}>
            User Form
          </h1>
          <h4 className="text-white">Home ● User Form</h4>
        </div>
      </div>

      <div className="px-lg-0 mt-5" id="about">
        <div className="  about px-lg-0">
          <div
            className="card card-shadows container"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-body  p-5">
              <div className="row g-5 mx-lg-0">
                <div
                  className="col-lg-6 col-md-12 wow  fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div className="abt-bg h-100 w-100 img-fluid"></div>
                </div>

                <div
                  className="col-lg-6 about-text wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h1 className="text-primary mb-4">Wristo Smartwatch</h1>
                  <h4>Rs. 1799</h4>
                  <p>Delievered in 3-5 Days</p>
                  <h5 className="mb-3 text-secondary">
                    <i className="fa-solid fa-truck"></i>{" "}
                    <b style={{ fontSize: "15px" }} className="">
                      Delievery Fee:
                    </b>
                    &nbsp;&nbsp;90 pkr
                  </h5>
                  <div className="form-group col-6">
                    <h5 htmlFor="exampleInputPassword1">Quantity</h5>
                    <div>
                      {addCount > 1 ? (
                        <button
                          className="btn btn-secondary me-2 btn-sm"
                          onClick={decrementCount}
                        >
                          <i className="fa-solid fa-angle-left" />
                        </button>
                      ) : null}
                      <label htmlFor="exampleInputPassword1">{addCount}</label>
                      <button
                        className="btn btn-secondary ms-2 btn-sm"
                        onClick={incrementCount}
                      >
                        <i className="fa-solid fa-angle-right" />
                      </button>
                    </div>
                  </div>

                  <hr />
                  <p className="">
                    <b>Product Info</b>
                  </p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <h5>Details</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur incidunt ipsam distinctio corrupti ipsum sit
                    voluptas inventore veritatis suscipit sint. Similique
                    debitis accusamus expedita optio fuga distinctio dolores
                    necessitatibus sapiente.
                  </p>
                  <Link to="/buy-form" className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyItem;
