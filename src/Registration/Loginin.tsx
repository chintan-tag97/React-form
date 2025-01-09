import React from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loginin() {
  return (
    
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark ">
             {/* <img
            src="image\svg.png"></img> */}
          <div className="text-center text-white">
            <div className="d-flex justify-content-center mb-3">
              <button className="btn btn-link text-white me-2">Log In</button>
              <button className="btn btn-link text-white">Sign Up</button>
            </div>
            <div className="login-card  p-4 rounded shadow">
              <h3 className="mb-4">Log In</h3>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Your Email "
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
              <a href="#" className="d-block mt-3 text-white ">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      );
    }
    
    export default Loginin;
    