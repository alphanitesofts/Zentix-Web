import React, { useState } from "react";
import { Modal } from "pretty-modal";

const About = () => {
  //modal for youtube video

  const [show, shouldShow] = useState(false);

  return (
    <div>
      <Modal
        onClose={() => {
          shouldShow(false);
        }}
        open={show}
      >
        <iframe
          className="iframe-responsive"
          src="https://www.youtube.com/embed/Fx_-7mCbhEI"
          title="YouTube video player"
          allow="accelerometer;muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Modal>

      <div className="px-lg-0 " id="about">
        <div className="d-flex justify-content-center mb-5">
          <button
            to="/Login"
            className="btn btn-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
          >
            Login
          </button>
          <button
            to="/Register"
            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
          >Register</button>
        </div>

        <div className="  about px-lg-0">
          <div
            className="card card-shadows container"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-body  p-5">
              <div className="row flex-wrap-reverse g-5 mx-lg-0">
                <div
                  className="col-lg-6 col-md-12 wow  fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div className="abt-bg">
                    <a onClick={() => { shouldShow(true) }}
                      className="bdr-ripple-ani-btn pink two"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </div>
                </div>

                <div
                  className="col-lg-6 about-text wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h1 className="text-secondary mb-4">About Us</h1>
                  <p className="mb-3">
                    <b>Modified:</b>Zentix – Makes Strong Future {" "}
                  </p>
                  <p className="text-center">
                    <b>About US</b>
                  </p>
                  <p className="mb-5">
                    Founded by M.Umer Yaqoob in April 2023.” Our Online -Business is founded with a vision of helping people achieve financial freedom and independence through online opportunities.” If Welcome to our innovative part-time work and earn the business! We understand that the modern workforce is changing, and traditional 9-to -5 jobs no longer work for everyone. That’s why we offer unique and exciting job opportunities that allow individuals to earn a great income while maintaining flexibility in their schedules. If you're looking for a part-time job that offers flexibility and great earning potential, look no further than our business. Join Zentix today and start earning while working on your own terms.
                    <br /> <br />
                    <b>Zentix</b> - Makes Strong Future .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
};

export default About;
