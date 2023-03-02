import React from 'react'

const Facts = () => {
  return (
    <div>
        {/* Fact Start */}
  <div className="container-xxl py-5" id='facts'>
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
          <h1 className="mb-4">We care about what we offer</h1>
          <p className="mb-5">Our truck dispatchers work harder, because their pay is commission-based. This results in higher paying loads for you. We also handle the packets, insurance certificates, invoices, and other pesky paperwork. Full IFTA reporting is included for all of your trucks under dispatch. No more driver payroll, we handle it at no additional cost as well as provide driver performance reports so you can act accordingly. If you like knowing how your business is doing, you’ll love our premium-level profit monitoring features. Including AR management, driver and carrier settlement statements, and other key reports.</p>
          <div className="d-flex align-items-center">
            <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
            <div className="ps-4">
              <h6>Call for any query!</h6>
              <h3 className="text-primary m-0"> (510) 751-6029</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mt-4 g-4 align-items-center">
            <div className="col-sm-6">
              <div className="bg-primary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                <i className="fa fa-users fa-2x text-white mb-3" />
                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                <p className="text-white mb-0">Happy Clients</p>
              </div>
              <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-ship fa-2x text-white mb-3" />
                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                <p className="text-white mb-0">Complete Shipments</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                <i className="fa fa-star fa-2x text-white mb-3" />
                <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                <p className="text-white mb-0">Customer Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
    </div>
  )
}

export default Facts