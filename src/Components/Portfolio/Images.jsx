import React from 'react'

const Images = () => {
  return (
    <div>
        <div className="py-5">
        <div className="overflow-hidden" id="team">
          <div className=" container" style={{ borderRadius: "10px" }}>
            <div className="py-5">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-secondary">LEADERSHIP</h1>
                <p
                  className="mb-5 ps-5 pe-5"
                  style={{ fontWeight: "normal", fontSize: "20px" }}
                >
                  The company empowers our team members to impact the company mission, grow personally and professionally, and reach an optimal work-life balance. So, meet with our awesome members!
                </p>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src="img/man.png" alt />
                    </div>
                    <div className="m-2 text-center">
                    <h4 className="mb-0 title-card">Ibrahim Khilji</h4>
                    <p>General Manager</p>
                    </div>
                    {/* <div className="btn-slide mt-1">
                      <i className="fa fa-share" />
                      <span>
                        <a href>
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href>
                          <i className="fab fa-twitter" />
                        </a>
                        <a href>
                          <i className="fab fa-instagram" />
                        </a>
                      </span>
                    </div> */}
                  </div>
                </div>
                
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src="img/man.png" alt />
                    </div>
                    <div className="m-2 text-center">
                    <h4 className="mb-0 title-card">Ibrahim Khilji</h4>
                    <p>General Manager</p>
                    </div>
                    {/* <div className="btn-slide mt-1">
                      <i className="fa fa-share" />
                      <span>
                        <a href>
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href>
                          <i className="fab fa-twitter" />
                        </a>
                        <a href>
                          <i className="fab fa-instagram" />
                        </a>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Images