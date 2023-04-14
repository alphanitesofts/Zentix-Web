import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatar from '../SourceFiles/avatar.jpg'

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Testimonial Start */}
      <div className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="testimonial">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-shadows container" style={{ borderRadius: "10px" }}>
              <div className="card-body p-5">
                <div className="text-center">
                  <h1 className="text-secondary">Our Happy Clients</h1>
                  <h5 className="mb-5" style={{ fontWeight: "normal" }}>
                    We always care for our clients, lets see what's their
                    opinion about us.
                  </h5>
                </div>
                <div
                  className="testimonial-carousel wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <Slider {...settings}>
                    <div className="message-review">
                      <div className="card container reviews-client ">
                        <div className="testimonial-item">
                          <i className="fa fa-quote-left fa-3x text-primary top-0 mt-4 me-4" />
                          <p className="mb-4 mt-2" style={{ lineHeight: "2" }}>
                            The user friendly interface allows it to be very easily understandable. Little to no investments with big proft margins, zentix has been a life changing turn in my life. As a student who does not have time for a full time occupation zentix has made it much easier for me to work online in my free time.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end mt-3 mb-4">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={avatar}
                          style={{ width: 80, height: 80, borderRadius: '50%' }}
                        />
                        <div className="ms-4">
                          <h5 className="mb-1">Mr. Ahmed</h5>
                          <p className="m-0">Lahore, Pakistan</p>
                        </div>
                      </div>
                    </div>



                    <div className="message-review">
                      <div className="card container reviews-client ">
                        <div className="testimonial-item">
                          <i className="fa fa-quote-left fa-3x text-primary top-0 mt-4 me-4" />
                          <p className="mb-4 mt-2" style={{ lineHeight: "2" }}>
                            Zentix has been a life changing experience for me.  Easy to work on and huge proft margins with very little efforts, zentix is something i would like to suggest to all the people who are looking for an online job with very little investments.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end mt-3 mb-4">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={avatar}
                          style={{ width: 80, height: 80, borderRadius: '50%' }}
                        />
                        <div className="ms-4">
                          <h5 className="mb-1">Farhan Ali</h5>
                          <p className="m-0">Lahore, Pakistan</p>
                        </div>
                      </div>
                    </div>

                    <div className="message-review">
                      <div className="card container reviews-client ">
                        <div className="testimonial-item">
                          <i className="fa fa-quote-left fa-3x text-primary top-0 mt-4 me-4" />
                          <p className="mb-4 mt-2" style={{ lineHeight: "2" }}>
                            The user friendly interface allows it to be very easily understandable. Little to no investments with big proft margins, zentix has been a life changing turn in my life. As a student who does not have time for a full time occupation zentix has made it much easier for me to work online in my free time.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end mt-3 mb-4">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={avatar}
                          style={{ width: 80, height: 80, borderRadius: '50%' }}
                        />
                        <div className="ms-4">
                          <h5 className="mb-1">Mr. Ahmed</h5>
                          <p className="m-0">Lahore, Pakistan</p>
                        </div>
                      </div>
                    </div>

                    <div className="message-review">
                      <div className="card container reviews-client ">
                        <div className="testimonial-item">
                          <i className="fa fa-quote-left fa-3x text-primary top-0 mt-4 me-4" />
                          <p className="mb-4 mt-2" style={{ lineHeight: "2" }}>
                            Zentix has been a life changing experience for me.  Easy to work on and huge proft margins with very little efforts, zentix is something i would like to suggest to all the people who are looking for an online job with very little investments.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end mt-3 mb-4">
                        <img
                          className="img-fluid flex-shrink-0"
                          src={avatar}
                          style={{ width: 80, height: 80, borderRadius: '50%' }}
                        />
                        <div className="ms-4">
                          <h5 className="mb-1">Farhan Ali</h5>
                          <p className="m-0">Lahore, Pakistan</p>
                        </div>
                      </div>
                    </div>

                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
};

export default Testimonial;
