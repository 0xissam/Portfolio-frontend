import React from 'react'

function Signup() {
  return (
    <>
  {/* signup popup form so: */}
  <div id="signup-popup" className="white-popup mfp-hide">
    <div className="top-form-header">
      <h4>Signup Form</h4>
    </div>
    <form action="#" method="post" id="main_Signup_form" noValidate="">
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="text" name="name" id="name3" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="text" name="name" id="name4" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="password" name="name" id="name5" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Password</label>
          </div>
        </div>
        <div className="col-12 col-md-12">
          <div className="group">
            <input type="password" name="name" id="name6" required="" />
            <span className="highlight" />
            <span className="bar" />
            <label>Confirm Password</label>
          </div>
        </div>
        <div className="col-12 col-sm-5 text-left ">
          <button type="submit" className="btn dream-btn">
            Login
          </button>
        </div>
        <div className="col-12 col-sm-7 text-left">
          <p className="mb-0 mt-10">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </form>
    <div className="other-accounts text-center">
      <p className="w-text">Login with other account</p>
      <div className="footer-social-info">
        <a href="#">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
        <a href="#">
          {" "}
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-google-plus" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</>

  )
}

export default Signup