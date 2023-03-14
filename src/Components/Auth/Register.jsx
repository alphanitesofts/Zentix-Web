import React,{useState} from 'react'

const Register = () => {
 
  return (
    <div>
        <div className="pageHeading">
        <div className="text-center" style={{ paddingTop: "170px" }}>
          <h1 className="text-white" style={{ fontSize: "60px" }}>
            Sign Up
          </h1>
          <h4 className="text-white">Home ● Sign Up</h4>
        </div>
      </div>

<div style={{marginTop:'70px'}}>
  <div className='container'>
  <div className="card">
  <div className="row flex-wrap-reverse">
    <div className="col-lg-4">
      <div className='abt-bg position-relative text-white'>
        <div className='position-absolute top-50 start-50 translate-middle text-center'>
          <h2 className='text-white'>Welcome to Zantix</h2>
          <p>Already have an account?</p>
          <button className='btn btn-primary mt-2'>Login Account</button>
        </div>
      </div>
    </div>
    <div className="col-lg-8 login-form">
      <div className="card-body">
        <div className=''>
          <h2>Create Your Account</h2>
          <p className='mb-sm-4 mb-3'>Haven't registered yet! don't worry just fillup all the information below and get your account now.</p>

<div className='row mb-3'>
    <div className='col-lg-6'>
    <input type="text" className="form-control login-input " placeholder='Enter Referral name'  />
    </div>
    <div className='col-lg-6'>
    <input type="text" className="form-control login-input" placeholder='Your Full Name(As per CNIC)*'/>

    </div>
</div>

<div className='row mb-3'>
    <div className='col-lg-6'>
    <input type="text" className="form-control login-input " placeholder='Your Father / Husband Name*'  />

    </div>
    <div className='col-lg-6'>
    <input type="number" className="form-control login-input " placeholder='Enter Your CNIC No*'/>

    </div>
</div>

<div className='row mb-3'>
    <div className='col-lg-6'>
    <input type="text" className="form-control login-input " placeholder='Date of Birth dd/mm/yyy*'  />

    </div>
    <div className='col-lg-6'>

    <div className='input-group'>
  <span className="input-group-text login-input" id="basic-addon1">+92</span>
  <input type="number" className="form-control login-input" placeholder="Mobile No. (Without 0)" aria-label="Username" aria-describedby="basic-addon1" />
</div>

    </div>
</div>

<div className='row mb-3'>
    <div className='col-lg-6'>
    <input type="email" id="email" name="email" className="form-control login-input " placeholder='Enter Your Email*'  />

    </div>
    <div className='col-lg-6'>
    <input type="text" className="form-control login-input " placeholder='Enter Your Username*'/>
    </div>
</div>

<div className='row mb-3'>
    <div className='col-lg-6'>
    <input type="password" className="form-control login-input " placeholder='Your Password*'  />

    </div>
    <div className='col-lg-6'>
    <input type="password" className="form-control login-input " placeholder='Confirm Password*'/>

    </div>
</div>

<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">First Read Our All <span className='text-primary'>Terms & Conditions</span></label>
</div>

 
  <button className='btn btn-primary me-auto rounded-pill ps-3 pe-3 pt-2 pb-2'>Create an Account</button>

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

export default Register