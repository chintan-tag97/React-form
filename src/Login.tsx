import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!formData.email) validationErrors.email = 'Email is required.';
    if (!formData.password) validationErrors.password = 'Password is required.';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert('Form Submitted');
    console.log(formData);

    setFormData({
      email: '',
      password: '',
    });
    setErrors({});
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        position: 'relative',
      }}
    >
      <video
        autoPlay
        muted
        loop
        className="video-background"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source
          src="image\\login-bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div
        className="p-4 rounded shadow text-white"
        style={{
          backgroundColor: 'rgb(0, 0, 0, 0.4)',
          width: '400px',
          opacity: 0.85,
          zIndex: 1,
        }}
      >
        <div className="text-center mb-1">
          <img
            src="image/logo1.png"
            alt="Logo"
            className="rounded-circle mb-1"
            style={{
              height: '80px',
              position: 'relative',
              left: '6px',
              top: '-65px',
              border: '15px solid #00000066',  
               
             
            }}
          />
          <h2>Login Here</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label d-flex text-white">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="floating input"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className={`form-control border-0 border-bottom ${errors.email ? 'is-invalid' : ''}`}
              style={{
                borderRadius: '0',
                backgroundColor: 'rgb(0, 0, 0, 0)',
                color: 'white',
                
              }}
            />
            {errors.email && <p className="invalid-feedback">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label d-flex text-white">
              Password
            </label>
            <input
              type="password"
              id="floating password"
              name="password"
              placeholder="Enter password"
              className={`form-control border-0 border-bottom text-white ${errors.password ? 'is-invalid' : ''}`}
              value={formData.password}
              onChange={handleChange}
              style={{
                borderRadius: '0',
                backgroundColor: 'rgb(0, 0, 0, 0)',
                color: 'white', 
              }}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-light w-100 text-bold mb-3">
            Login
          </button>
          <div className="d-flex flex-column align-items-start">
            <a href="#" className="text-light text-decoration me-3">
              Forget Password
            </a>
            <a href="#" className="text-light text-decoration">
              Registration
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
