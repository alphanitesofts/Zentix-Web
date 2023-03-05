import React from "react";

const NewsLetter = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="bg-primary newsletter-bg">
        <div className="row">
          <h2
            className="text-center text-white mb-5"
            style={{ marginTop: "100px" }}
          >
            DON'T FORGET TO SUBSCRIBE OUR NEWSLETTER
          </h2>
          <div className="col-lg-8 mx-auto">
            <div className="input-group form-inputs input-group-lg p-3">
              <input
                style={{ borderRadius: "35px", fontSize: "15px" }}
                type="text"
                placeholder="Enter Your email address"
                className="form-control p-3"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
              <span className="icon me-5">
                <i className="fa-solid fa-paper-plane" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
