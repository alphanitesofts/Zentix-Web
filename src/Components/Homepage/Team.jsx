import React from "react";

const Team = () => {
  return (
    <div>
      {/* Team Start */}
      <div className="py-5">
        <div className="" id="team">
          <div className="card card-shadows container" style={{ borderRadius: "10px" }}>
            <div className="card-body py-5">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="text-secondary">Latest News</h1>
                <p
                  className="mb-5"
                  style={{ fontWeight: "normal", fontSize: "20px" }}
                >
                  Welcome! Please check our latest news and article here...
                </p>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-4 col-md-6 cardx wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src="img/man.png" alt />
                    </div>
                    <div className="m-2">
                    <h4 className="mb-0 title-card">Ibrahim Khilji</h4>
                    <p> <i className="fa-solid fa-calendar-day"/> 10 nov, 2021</p>
                    <p className="mt-2">Ibrahim Khilji Founder and CEO A first-generation direct-sales entrepreneur, Ibrahim Khilji is passionate about inspiring new generations of entrepreneurs. Sha...</p>
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
      {/* Team End */}
    </div>
  );
};

export default Team;
