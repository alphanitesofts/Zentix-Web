import React from "react";
import girl from '../SourceFiles/girl.jpeg'
import ahmed from '../SourceFiles/ahmed_one.jpeg'
import ahmed_two from '../SourceFiles/ahmed_one.jpeg'
import manager from '../SourceFiles/manager.jpeg'
import umer from '../SourceFiles/umer.jpeg'


const Members = () => {
  return (
    <div>

      <div>
        <div className="pageHeading">
          <div className="text-center" style={{ paddingTop: '170px' }}>
            <h1 className="text-white" style={{ fontSize: '70px' }}>About</h1>
            <h4 className="text-white">Home ● About</h4>
          </div>
        </div>
      </div>

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
                    <div className="team-item p-4 bg-white">
                      <div className="overflow-hidden mb-4">
                        <img className="img-fluid" src={umer} alt />
                      </div>
                      <div className="m-2 text-center">
                        <h4 className="mb-0 title-card">M. Umer Yaqoob</h4>
                        <p>CEO</p>
                      </div>

                    </div>
                  </div>

                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="team-item p-4 bg-white">
                      <div className="overflow-hidden mb-4">
                        <img className="img-fluid" src={manager} alt />
                      </div>
                      <div className="m-2 text-center">
                        <h4 className="mb-0 title-card">SYed Talal</h4>
                        <p>Manager</p>
                      </div>

                    </div>
                  </div>

                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="team-item p-4 bg-white">
                      <div className="overflow-hidden mb-4">
                        <img className="img-fluid" src={ahmed} alt />
                      </div>
                      <div className="m-2 text-center">
                        <h4 className="mb-0 title-card">Ahmed Razzaq</h4>
                        <p>HOD</p>
                      </div>

                    </div>
                  </div>

                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="team-item p-4 bg-white">
                      <div className="overflow-hidden mb-4">
                        <img className="img-fluid" src={girl} alt />
                      </div>
                      <div className="m-2 text-center">
                        <h4 className="mb-0 title-card">Amina Shair</h4>
                        <p>COO</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Members;
