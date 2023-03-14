import React from "react";

const Form = () => {
  return (
    <div>
      <div className="pageHeading">
        <div className="text-center" style={{ paddingTop: "170px" }}>
          <h1 className="text-white" style={{ fontSize: "60px" }}>
            SHOP
          </h1>
          <h4 className="text-white">Home ● Form</h4>
        </div>
      </div>

      <div className="px-lg-0 mt-5" id="about">
        <div className="  about px-lg-0">
          <div
            className="card card-shadows container"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-body p-5">
              <div className="row">
                <h3 className="text-center text-primary mb-4">
                  Please Fill the following fields to get things done...
                </h3>

                <div className="col-lg-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="col-lg-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="col-lg-12">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Region:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="col-lg-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    City:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Aliahmed@gmail.com"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="col-lg-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Postal Code:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Aliahmed@gmail.com"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="col-lg-8 mt-5 ">
                  <div className="form-group">
                    <p style={{ fontSize: "18px" }}>
                      Upload the screenshot of the bill that you deposited in
                      the account
                    </p>
                    <div
                      className="input-group"
                      style={{ border: "1px solid black" }}
                    >
                      <div className="custom-file">
                        {/* onChange={(e) => setPicture(e.target.files[0])} */}
                        <input
                          type="file"
                          className="custom-file-input"
                          id="exampleInputFile"
                        />
                        {/* style={{ borderColor: picture === "" && fieldStatus === true ? "red" : '#ced4da' }} */}
                        <label
                          className="custom-file-label"
                          htmlFor="exampleInputFile"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                    {/* <p >{picture === "" && fieldStatus === true ? <span className='text-danger'> Please Add picture for the item</span> : null}</p> */}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary  w-25 mt-5">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
