import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Reactform() {
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
        <source src="image\\login-bg.mp4" type="video/mp4" />
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
          <FloatingLabel
            controlId="floatingInput"
            label="Email "
            className="mb-3 floating-email"
            style={{
              color: 'white', 
            }}
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={handleChange}
              value={formData.email}
              name="email"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                borderBottom: '2px solid white',
                borderRadius: '0',
                boxShadow: 'none',
                outline: 'none',
              }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            style={{
              color: 'white',
            }}
          >
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              name="password"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: 'none',
                borderBottom: '2px solid white',
                borderRadius: '0',
                boxShadow: 'none',
                outline: 'none',
              }}
            />
          </FloatingLabel>

          <button
            type="submit"
            className="btn btn-light w-100 text-bold mb-3 mt-3"
          >
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

export default Reactform;
