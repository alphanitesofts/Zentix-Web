import React from 'react'

const Pricing = () => {
  return (
    <div>
      {/* Pricing Start */}
      <div className="container-xxl py-5" id='pricing'>
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
            <h1 className="mb-5">Perfect Pricing Plan</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Paper Work Only (For the Individuals)</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top" style={{ fontSize: 22 }}>$</small>145<small className="align-bottom" style={{ fontSize: 16 }}>per week/per truck</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><i className="fa fa-check text-success me-3" />No Forced Dispatch</p>
                  <p><i className="fa fa-check text-success me-3" />Payload & FSC = 100% Yours</p>
                  <p><i className="fa fa-check text-success me-3" />We Negotiate Top Paying Rates</p>
                  <p><i className="fa fa-check text-success me-3" />Setup Paperwork</p>
                  <p><i className="fa fa-check text-success me-3" />Fax/Email Documents</p>
                  <a className="btn-slide mt-2" href><i className="fa fa-arrow-right" /><span>Order Now</span></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Professional Plan (For the small Company)</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top" style={{ fontSize: 22 }}>$</small>245<small className="align-bottom" style={{ fontSize: 16 }}>per week/per truck</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><i className="fa fa-check text-success me-3" />No Forced Dispatch</p>
                  <p><i className="fa fa-check text-success me-3" />Payload & FSC = 100% Yours</p>
                  <p><i className="fa fa-check text-success me-3" />We Negotiate Top Paying Rates</p>
                  <p><i className="fa fa-check text-success me-3" />Setup Paperwork</p>
                  <p><i className="fa fa-check text-success me-3" />Fax/Email Documents</p>
                  <p><i className="fa fa-check text-success me-3" />Credit Checks</p>
                  <p><i className="fa fa-check text-success me-3" />Personal Dispatche</p>
                  <p><i className="fa fa-check text-success me-3" />Request Quick Pay</p>

                  <a className="btn-slide mt-2" href><i className="fa fa-arrow-right" /><span>Order Now</span></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="price-item">
                <div className="border-bottom p-4 mb-4">
                  <h5 className="text-primary mb-1">Ultimate Work Plan (For the large Company)</h5>
                  <h1 className="display-5 mb-0">
                    <small className="align-top" style={{ fontSize: 22 }}>$</small>295<small className="align-bottom" style={{ fontSize: 16 }}>per week/per truck</small>
                  </h1>
                </div>
                <div className="p-4 pt-0">
                  <p><i className="fa fa-check text-success me-3" />Payload & FSC = 100% Yours</p>
                  <p><i className="fa fa-check text-success me-3" />We Negotiate Top Paying Rates</p>
                  <p><i className="fa fa-check text-success me-3" />Setup Paperwork</p>
                  <p><i className="fa fa-check text-success me-3" />Fax/Email Documents</p>
                  <p><i className="fa fa-check text-success me-3" />Credit Checks</p>
                  <p><i className="fa fa-check text-success me-3" />Personal Dispatche</p>
                  <p><i className="fa fa-check text-success me-3" />Request Quick Pay</p>
                  <p><i className="fa fa-check text-success me-3" />Request Fuel Advances</p>
                  <p><i className="fa fa-check text-success me-3" />24/7 Dispatch Support</p>
                  <p><i className="fa fa-check text-success me-3" />Request Insurance Certificates</p>
                  <p><i className="fa fa-check text-success me-3" />Driver Directions Assistance</p>
                  <p><i className="fa fa-check text-success me-3" />Setup / Collection Assistance</p>
                  <p><i className="fa fa-check text-success me-3" />Unused Truck Order Assistance</p>

                  <a className="btn-slide mt-2" href><i className="fa fa-arrow-right" /><span>Order Now</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing End */}
    </div>
  )
}

export default Pricing