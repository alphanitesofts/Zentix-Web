import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" id='testimonial'>
        <div className="container py-5">
          <div className="text-center">
            <h6 className="text-secondary text-uppercase">Testimonial</h6>
            <h1 className="mb-0">Our Clients Say!</h1>
          </div>
          <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">

            <Slider {...settings}>
              <div>
                <div className="testimonial-item p-4 my-5">
                  <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                  <div className="d-flex align-items-end mb-4">
                    <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" style={{ width: 80, height: 80 }} />
                    <div className="ms-4">
                      <h5 className="mb-1">Sarah Jones</h5>
                      <p className="m-0">Dalias, TX</p>
                    </div>
                  </div>
                  <p className="mb-0">"They know how to pick and choose the best loads for my drivers. I've worked with many truck dispatch service companies and none of them cared for my company as much Us Trucking LLc. They reduced so much stress and headaches for me. My drivers are happy with these guys. They are getting me amazing rates and lanes. Wish I found them sooner!"</p>
                </div>
              </div>

              <div>
                <div className="testimonial-item p-4 my-5">
                  <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                  <div className="d-flex align-items-end mb-4">
                    <img className="img-fluid flex-shrink-0" src="img/dispatch.jpg" style={{ width: 80, height: 80 }} />
                    <div className="ms-4">
                      <h5 className="mb-1">Erik Maqueda</h5>
                      <p className="m-0">Chicago, IL</p>
                    </div>
                  </div>
                  <p className="mb-0">"If it was not for Us Trucking LLc, my trucking business would not be where it is today. Their truck services makes my business run smoothly. They are booking $3.20+ per mile loads on a consistent basis for my OTR drivers. I would highly recommend their services to anyone looking to outsource their dispatching. "</p>
                </div>
              </div>

              <div>
                <div className="testimonial-item p-4 my-5">
                  <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                  <div className="d-flex align-items-end mb-4">
                    <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style={{ width: 80, height: 80 }} />
                    <div className="ms-4">
                      <h5 className="mb-1">Jared Thomson</h5>
                      <p className="m-0">Nashville, TN</p>
                    </div>
                  </div>
                  <p className="mb-0">"I am an owener operator with a very pick personality. I want the best loads all the time. I've worked with them for over a year now, and they continue to deliver the best dispatching service. I always have loads ready to pick right after my morning drops. If it was not for them, I would still be stressed out trying to book my own loads. Highly recommend them!"</p>
                </div>
              </div>

              <div>
                <div className="testimonial-item p-4 my-5">
                  <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                  <div className="d-flex align-items-end mb-4">
                    <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style={{ width: 80, height: 80 }} />
                    <div className="ms-4">
                      <h5 className="mb-1">Caleb Khooger</h5>
                      <p className="m-0">Los Angeles, CA</p>
                    </div>
                  </div>
                  <p className="mb-0">"These guys do an AMAZING job dispatching 3 of my trucks. My drivers are pleased with them and so am I. Since I started working with them, my profit margins have increased by at least 30%. We are consistently hitting over $10,000+ in gross revenue for each of my trucks. I've got 2 Reefers and 1 Dry Van. Their communication is phenomenal!"</p>
                </div>
              </div>


            </Slider>

          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  )
}

export default Testimonial