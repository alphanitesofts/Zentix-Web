import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div className="card container" style={{ borderRadius: "10px" }}>
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
                    <div>
                      <div className="card container m-1 message-review">
                        <div className="testimonial-item my-5">
                          <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 mt-5 me-4" />
                          <p className="mb-0" style={{ lineHeight: "2" }}>
                            Zantex Goes above the Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veritatis maiores iure
                            ab impedit voluptatibus perspiciatis earum tempore
                            in illo, eos, quibusdam laudantium adipisci deserunt
                            nemo, molestias repellendus temporibus. Est optio,
                            id dolor voluptatibus tempore commodi adipisci ad,
                            accusamus, ea doloremque quidem ipsum tempora libero
                            eaque officiis?
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end mb-4">
                        <img
                          className="img-fluid flex-shrink-0"
                          src="img/testimonial-1.jpg"
                          style={{ width: 80, height: 80, borderRadius:'50%' }}
                        />
                        <div className="ms-4">
                          <h5 className="mb-1">Sarah Jones</h5>
                          <p className="m-0">Dalias, TX</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="card container m-1 message-review">
                        <div className="testimonial-item my-5">
                          <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 mt-5 me-4" />
                          <p className="mb-0" style={{ lineHeight: "2" }}>
                            Zantex Goes above the Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veritatis maiores iure
                            ab impedit voluptatibus perspiciatis earum tempore
                            in illo, eos, quibusdam laudantium adipisci deserunt
                            nemo, molestias repellendus temporibus. Est optio,
                            id dolor voluptatibus tempore commodi adipisci ad,
                            accusamus, ea doloremque quidem ipsum tempora libero
                            eaque officiis?
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end mb-4">
                        <img
                          className="img-fluid flex-shrink-0"
                          src="img/testimonial-1.jpg"
                          style={{ width: 80, height: 80, borderRadius:'50%' }}
                        />
                        <div className="ms-4">
                          <h5 className="mb-1">Sarah Jones</h5>
                          <p className="m-0">Dalias, TX</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="card container m-1 message-review">
                        <div className="testimonial-item my-5">
                          <i className="fa fa-quote-left fa-3x text-primary position-absolute top-0 mt-5 me-4" />
                          <p className="mb-0" style={{ lineHeight: "2" }}>
                            Zantex Goes above the Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veritatis maiores iure
                            ab impedit voluptatibus perspiciatis earum tempore
                            in illo, eos, quibusdam laudantium adipisci deserunt
                            nemo, molestias repellendus temporibus. Est optio,
                            id dolor voluptatibus tempore commodi adipisci ad,
                            accusamus, ea doloremque quidem ipsum tempora libero
                            eaque officiis?
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-end mb-4 ">
                        <img
                          className="img-fluid flex-shrink-0"
                          src="img/testimonial-1.jpg"
                          style={{ width: 80, height: 80, borderRadius:'50%' }}
                        />
                        <div className="ms-4">
                          <h5 className="mb-1">Sarah Jones</h5>
                          <p className="m-0">Dalias, TX</p>
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
