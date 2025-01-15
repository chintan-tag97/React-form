import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sigin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


 function Sigin() {
return (
 
    <div className="container-fluid vh-100 d-flex">
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-white">
          <div className="p-4 w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-left mb-3 d-flex">Sign In</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.
            </p>
            
            <form>

              <div className="form1 mb-0 ">
                <input type="text" className="form-control  " placeholder="Username" />
              </div>

              <div className="form2 mb-0">
                <input type="password" className="form-control" placeholder="Password" />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                <div className=" ">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className="ms-2">Remember me</label>
                </div>

                <a href="/forgot-password" className="text-dark">Forgot Password?</a>
              </div>

              <button type="submit" className="btn btn-primary w-100">Log In</button>
            </form>

            <div className="text-center m-3"><p>— or —</p></div>
            <div>

              <button className="btn btn-primary w-100 mb-2">
              <i className="fa-solid fa-coffee"></i> Login with Facebook
              </button>

              <button className="btn btn-info w-100 mb-2">
              <i className="fa-solid fa-coffee"></i>Login with Twitter
              </button>

              <button className="btn btn-danger w-100">
                <i className=""></i> Login with Google
              </button>

            </div>
          </div>
        </div>

        
        <div className="col-md-6 image">
          <div className="h-100" style={{ backgroundImage: 'url("https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?cs=srgb&dl=pexels-pixabay-290275.jpg&fm=jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sigin;
