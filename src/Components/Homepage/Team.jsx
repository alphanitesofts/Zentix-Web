import React from 'react'

const Team = () => {
  return (
    <div>
        {/* Team Start */}
  <div className="container-xxl py-5" id='team'>
    <div className="container py-5">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase">Our Team</h6>
        <h1 className="mb-5">Expert Team Members</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item p-4">
            <div className="overflow-hidden mb-4">
              <img className="img-fluid" src="img/man.png" alt />
            </div>
            <h5 className="mb-0">Danny Hart</h5>
            {/* <p>Designation</p> */}
            <div className="btn-slide mt-1">
              <i className="fa fa-share" />
              <span>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item p-4">
            <div className="overflow-hidden mb-4">
              <img className="img-fluid" src="img/gamer.png" alt />
            </div>
            <h5 className="mb-0">Kevin Hart</h5>
            {/* <p>Designation</p> */}
            <div className="btn-slide mt-1">
              <i className="fa fa-share" />
              <span>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item p-4">
            <div className="overflow-hidden mb-4">
              <img className="img-fluid" src="img/mans.png" alt />
            </div>
            <h5 className="mb-0">Eric Freeman</h5>
            {/* <p>Designation</p> */}
            <div className="btn-slide mt-1">
              <i className="fa fa-share" />
              <span>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
          <div className="team-item p-4">
            <div className="overflow-hidden mb-4">
              <img className="img-fluid" src="img/manx.png" alt />
            </div>
            <h5 className="mb-0">Nicaloas Franklel</h5>
            {/* <p>Designation</p> */}
            <div className="btn-slide mt-1">
              <i className="fa fa-share" />
              <span>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
    </div>
  )
}

export default Team