import React, { useState } from "react";
// import "./Style.css";
import "./Register.scss";

import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleCard = () => {
    setIsLoggedIn(!isLoggedIn);
  };

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

                <div className="toggle-switch-container">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={!isLoggedIn}
                      onChange={toggleCard}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="card1 mx-auto">
                  <div className={`card1-2 ${isLoggedIn ? "" : "rotate"}`}>
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
                          </div>
                          <a href="#" className="btn mt-4 mb-3 bg-white">
                            SUBMIT
                          </a>
                          <p className="">
                            <a
                              href="#0"
                              className="link text-white text-decoration-none "
                            >
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
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
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
                          </div>
                          <a
                            href="#"
                            className="btn mt-4 bg-white font-weight-bold"
                          >
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
