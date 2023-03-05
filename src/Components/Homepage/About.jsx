import React from "react";

const About = () => {
  return (
    <div>
      {/* About Start */}
      <div className="overflow-hidden px-lg-0" id="about">
        <div className="  about px-lg-0">
          <div className="card container" style={{ borderRadius: "10px" }}>
            <div className="card-body p-5">
              <div className="row g-5 mx-lg-0">
                {/* <div
                  className="col-lg-6 ps-lg-0 wow fadeInLeft"
                  data-wow-delay="0.1s"
                  style={{ minHeight: 400 }}
                >
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src="img/about.jpg"
                      style={{ objectFit: "cover" }}
                      alt
                    />
                  </div>
                </div> */}

                <div
                  className="col-lg-6 col-md-12 wow  fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div className="abt-bg">
                    <a href="#" className="bdr-ripple-ani-btn pink two"><i className="fa fa-play" /></a>
                  </div>
                </div>

                <div
                  className="col-lg-6 about-text wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h1 className="text-secondary mb-4">About Us</h1>
                  <p className="mb-3">
                    <b>Modified:</b>Zantex – The Economy of Next-generation{" "}
                  </p>
                  <p className="text-center">
                    <b>About the US</b>
                  </p>
                  <p className="mb-5">
                    Zantex is meant to help people everywhere enjoy beautiful,
                    work-life balanced, healthy, and fulfilling life through our
                    exceptional and organic products along with quality services
                    and marketing plan. It’s a pack of fun and rewarding
                    business opportunity, and a culture of family, gratitude,
                    and quality services. Zantex has brought the latest business
                    model to Pakistan. We’re looking forward to promoting the
                    concept of E-commerce and dropshipping in Pakistan. We will
                    facilitate all those people who can spare their time and
                    spend it with this project to work part-time and wanted to
                    stable their financial position and the existing business
                    holders who are looking forward to expanding their business.
                    Because we believe that increasing rate of unemployment can
                    only be overwhelmed with the good business opportunities
                    just like <b>Zantex</b>– The Economy of Next-generation.
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
