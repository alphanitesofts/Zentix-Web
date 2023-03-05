import React from "react";

const FAQ = () => {
  return (
    <div style={{background:'#fff'}}>
      <div className="pageHeading">
        <div className="text-center" style={{ paddingTop: "170px" }}>
          <h1 className="text-white" style={{ fontSize: "60px" }}>
            FAQ
          </h1>
          <h4 className="text-white">Home ● FAQ</h4>
        </div>
      </div>

      <div>
        <h1 className=" text-center" style={{ marginTop: "120px" }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <div className="row" style={{ marginBottom: "100px" }}>
          <div className="col-lg-10 mx-auto">
            <div className="accordion" id="accordionExample">
              <div
                className="accordion-item p-2 m-3"
                style={{ borderRadius: "10px" }}
              >
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      borderRadius: "10px",
                    }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    I haven't received my order
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The processing time for your withdrawal will vary depending
                    on your payment method. You can view further information on
                    withdrawal clearance times by visiting our Payment Method
                    page. If you are unable to locate your withdrawal after the
                    processing time has passed, please Contact Us.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item p-2 m-3"
                style={{ borderRadius: "10px" }}
              >
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      borderRadius: "10px",
                    }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How to buy an item
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can make a withdrawal from the Withdraw page. Where
                    possible we are required to send funds back to the payment
                    method that was used to deposit the original funds. For
                    further details relating to processing times and any
                    applicable fees, please refer to the Withdrawals section of
                    our Payments page. You can make a withdrawal from the
                    Withdraw page. Where possible we are required to send funds
                    back to the payment method that was used to deposit the
                    original funds. For further details relating to processing
                    times and any applicable fees, please refer to the
                    Withdrawals section of our Payments page.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item p-2 m-3"
                style={{ borderRadius: "10px" }}
              >
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      borderRadius: "10px",
                    }}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How To Making A Withdrawal?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                    repellat. Laborum modi dolore aliquam officia qui vero
                    excepturi, dignissimos laboriosam ducimus tempore pariatur
                    officiis, unde fugiat molestiae. Cum odit, error facere quia
                    laborum nemo totam officia rerum vitae nesciunt delectus
                    quas! Eaque repudiandae incidunt sed voluptatibus suscipit
                    inventore quisquam aut.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ background: "aliceblue" }}>
          <div className="overflow-hidden" id="about">
            <div className="px-lg-0">
              <div
                className="card container"
                style={{ borderRadius: "10px", marginTop: "100px" }}
              >
                <div className="card-body p-5">
                  <div className="row g-5 mx-lg-0">
                    <div
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
                    </div>

                    <div
                      className="col-lg-6 about-text wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h3 className="text-secondary mb-4">What is Dnex</h3>
                      <p className="mb-3">
                        <b>Dnex (direct sale of next generation)</b>
                      </p>
                      <p className="mb-5">
                        We create different bundles to sell products and
                        services online and let our community members use the
                        technique of ‘direct sale’ and earn a handsome
                        commission. This reduces the cost of a middle man and
                        that is turned into commission which is divided into
                        teams in favour of their selling efforts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card container"
                style={{ borderRadius: "10px", marginTop: "100px" }}
              >
                <div className="card-body p-5">
                  <div className="row g-5 mx-lg-0">
                    <div
                      className="col-lg-6 ps-lg-0 wow fadeInRight"
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
                    </div>

                    <div
                      className="col-lg-6 about-text wow fadeInDown"
                      data-wow-delay="0.3s"
                    >
                      <h3 className="text-secondary mb-4">What is Dnex</h3>
                      <p className="mb-3">
                        <b>Dnex (direct sale of next generation)</b>
                      </p>
                      <p className="mb-5">
                        We create different bundles to sell products and
                        services online and let our community members use the
                        technique of ‘direct sale’ and earn a handsome
                        commission. This reduces the cost of a middle man and
                        that is turned into commission which is divided into
                        teams in favour of their selling efforts.
                      </p>
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

export default FAQ;
