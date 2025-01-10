import React from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Register() {
  return (
   
    <div className="section position-relative">

      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3 ">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>

                <input
                  className="toggle"
                  type="checkbox"
                  id="slider"
                  name="slider"
                />
                <label htmlFor="slider"></label>

                <div className="card1 mx-auto">
                  <div className="card1-2">
                    <div className="card3">
                      <div className="card3-1">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">Log In</h4>
                          <div className="form-group">
                         
                            <input
                              type="text"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              id="email"
                            />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="pass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" className="btn mt-4 mb-3 bg-white">
                            SUBMIT
                          </a>
                          <p className="">
                            <a href="#0" className="link text-white text-decoration-none ">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card4">
                      <div className="card3-1">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="name"
                            />
                            <i className=""></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                            />
                            <i className=""></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="pass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                            />
                            <i className=""></i>
                          </div>
                          <a href="#" className="btn mt-4 bg-white font-weight-bold">
                            SUBMIT
                          </a>
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
    </div>
    
  );
}

export default Register;
