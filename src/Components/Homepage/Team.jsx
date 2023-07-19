import React from "react";
import girl from '../SourceFiles/girl.jpeg'
import ahmed from '../SourceFiles/ahmed_one.jpeg'
import manager from '../SourceFiles/manager.jpeg'
import umer from '../SourceFiles/umer.jpeg'
import Zain from '../SourceFiles/Zain Khan.jpeg'
import Munatazir from '../SourceFiles/Muntazir.jpeg'
import Raheel from '../SourceFiles/Raheel AMbasadar.jpeg'


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
                  className="col-lg-3 col-md-6 cardx wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src={umer} alt />
                    </div>
                    <div className="m-2">
                      <h4 className="mb-0 title-card">M. Umer Yaqoob</h4>
                      <p> <i className="fa-solid fa-calendar-day" /> 10 april, 2023</p>
                      <p className="mt-2">
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 cardx wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src={Munatazir} alt />
                    </div>
                    <div className="m-2">
                      <h4 className="mb-0 title-card">Muntazir Khan</h4>
                      <p> <i className="fa-solid fa-calendar-day" /> 10 april, 2023</p>
                      <p className="mt-2">
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 cardx wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src={Raheel} alt />
                    </div>
                    <div className="m-2">
                      <h4 className="mb-0 title-card">Raheel</h4>
                      <p> <i className="fa-solid fa-calendar-day" /> 10 april, 2023</p>
                      <p className="mt-2">
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 cardx wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src={Zain} alt />
                    </div>
                    <div className="m-2">
                      <h4 className="mb-0 title-card">Zain Khan</h4>
                      <p> <i className="fa-solid fa-calendar-day" /> 10 april, 2023</p>
                      <p className="mt-2">
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 cardx wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <div className="team-item p-4">
                    <div className="overflow-hidden mb-4">
                      <img className="img-fluid" src={manager} alt />
                    </div>
                    <div className="m-2">
                      <h4 className="mb-0 title-card">M. Talal Bukhari</h4>
                      <p> <i className="fa-solid fa-calendar-day" /> 10 april, 2023</p>
                      <p className="mt-2">
                      </p>
                    </div>
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
