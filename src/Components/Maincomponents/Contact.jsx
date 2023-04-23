import React from "react";
import contact from '../SourceFiles/contact_us.png'

const Contact = () => {
  return (
    <div>
      <div className="pageHeading">
        <div className="text-center" style={{ paddingTop: "170px" }}>
          <h1 className="text-white" style={{ fontSize: "60px" }}>
            Contact Us
          </h1>
          <h4 className="text-white">Home ● Contact Us</h4>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-4 col-sm-6 col-md-6 mt-5 ">
              <div className="contact-info-block text-center bg-white">
                <i className="fa-solid fa-envelope" />
                <h4>Address</h4>
                <p className="lead">Nadirabad Lahore Cantt</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-5">
              <div className="contact-info-block text-center bg-white">
                <i className="fa-sharp fa-solid fa-building" />
                <h4>Email</h4>
                <p className="lead">ztix22001@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mt-5">
              <div className="contact-info-block text-center bg-white">
                <i className="fa-solid fa-phone" />
                <h4>Phone Number</h4>
                <p className="lead">03277888834</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid overflow-hidden py-5 px-lg-0"
          id="features"
        >
          <div className="container feature py-5 px-lg-0">
            <div className="row flex-wrap-reverse g-5 mx-lg-0">
              <div
                className="col-lg-6 pe-lg-0 wow fadeInRight"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img

                    className="position-absolute img-fluid"
                    src={contact}
                    style={{ marginTop: '60px' }}
                    alt
                  />
                </div>
              </div>
              <div
                className="col-lg-6 feature-text wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h1 className="text-secondary mb-3">Contact Information</h1>
                <h5 className="mb-5" style={{ fontWeight: "normal" }}>
                  We are here for you always! please fill up the information and
                  feel free ask if you have any query.
                </h5>
                <div className="mb-3 wow fadeInUp" data-wow-delay="0.3s">
                  <input
                    type="email"
                    className="form-control pt-3 pb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3 wow fadeIn" data-wow-delay="0.5s">
                  <input
                    type="email"
                    className="form-control pt-3 pb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Write your subject"
                  />
                </div>
                <div className="mb-3 wow fadeInUp" data-wow-delay="0.7s">
                  <input
                    type="email"
                    className="form-control pt-3 pb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter E-Mail Address"
                  />
                </div>
                <div className="mb-3 wow fadeIn" data-wow-delay="0.9s">
                  <div className="mb-3">
                    <textarea
                      className="form-control  pt-3 pb-3"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      placeholder="Write your message"
                    />
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Submit Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
