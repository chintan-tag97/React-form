import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    age: '',
    phone: '',
    gender: '',
    city: '',
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

    if (!formData.name) validationErrors.name = 'Name is required.';
    if (!formData.id) validationErrors.id = 'ID is required.';
    if (!formData.age) validationErrors.age = 'Age is required.';
    if (!formData.phone) validationErrors.phone = 'Phone is required.';
    if (!formData.gender) validationErrors.gender = 'Gender is required.';
    if (!formData.city) validationErrors.city = 'City is required.';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert('Form Submit');
    console.log(formData);

    setFormData({
      name: '',
      id: '',
      age: '',
      phone: '',
      gender: '',
      city: '',
    });
    setErrors({});
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="p-4 border rounded shadow"
        onSubmit={handleSubmit}
        style={{ width: '300px' }}
      >
        <div className="text-center">
          <h2>Form</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter your Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Enter your ID:
          </label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="Enter ID"
            value={formData.id}
            onChange={handleChange}
            className="form-control"
          />
          {errors.id && <p className="text-danger">{errors.id}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Enter your Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
          />
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="d-flex gap-2">
            <div className="form-check">
              <input
                type="radio"
                name="gender"
                value="Male"
                id="male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="gender"
                value="Female"
                id="female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="female" className="form-check-label">
                Female
              </label>
            </div>
          </div>
          {errors.gender && <p className="text-danger">{errors.gender}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <select
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select City</option>
            <option value="Valsad">Valsad</option>
            <option value="vapi">Vapi</option>
            <option value="Surat">Surat</option>
            <option value="Pardi">Pardi</option>
            <option value="Vadodara">Vadodara</option>
          </select>
          {errors.city && <p className="text-danger">{errors.city}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
