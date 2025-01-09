import React from 'react'
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
   
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
          <div className="text-center text-white">
            <div className="d-flex justify-content-center mb-3">
              <button className="btn btn-link text-white me-2">Log In</button>
              <button className="btn btn-link text-white">Sign Up</button>
            </div>
            <div className="signup-card bg-dark p-4 rounded shadow">
              <h3 className="mb-4">Sign Up</h3>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary change-placeholder"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Your Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-light w-50">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
    
    export default Register;
 