import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  // show password
  const [showPassword, setShowPassword] = useState(false);

  const showConfirmPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
        <div className="pageHeading">
        <div className="text-center" style={{ paddingTop: "170px" }}>
          <h1 className="text-white" style={{ fontSize: "60px" }}>
            Sign In
          </h1>
          <h4 className="text-white">Home ● Sign In</h4>
        </div>
      </div>

<div style={{marginTop:'70px'}}>
  <div className='container'>
  <div className="card">
  <div className="row flex-wrap-reverse">
    <div className="col-lg-6">
      <div className='abt-bg position-relative text-white'>
        <div className='position-absolute top-50 start-50 translate-middle text-center'>
          <h2 className='text-white'>Welcome to Zantix</h2>
          <p>Haven't registered yet? Don't worry just fill all the information below and get account now.</p>
          <Link to='/Register' className='btn btn-primary mt-2'>Sign Up</Link>
        </div>
      </div>
    </div>
    <div className="col-lg-6 login-form">
      <div className="card-body">
        <div className=''>
          <h2>Login Account</h2>
          <p className='mb-sm-4 mb-3'>To Login into site please enter your username and password</p>
<div className='form-input'>
          <input type="text" className="form-control mb-3 login-input" placeholder='Username'  />
          <input className="form-control login-input" placeholder='Password' type={showPassword ? "text" : "password"} />
          <span className="icon me-2">
                        {showPassword === false ? (
                          <i
                            className="fa-solid fa-eye"
                            onClick={showConfirmPassword}
                          />
                        ) : (
                          <i
                            className="fa-solid fa-eye-slash"
                            onClick={showConfirmPassword}
                          />
                        )}
                      </span>
</div>
<div className='d-flex mt-4'>
  <p className='mt-2'>Forget Password?</p>
  <button className='btn btn-primary ms-auto rounded-pill ps-4 pe-4 pt-3 pb-3'>Login Account</button>
</div>
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

export default Login