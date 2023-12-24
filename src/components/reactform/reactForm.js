import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    mobileNumber: '',
    gender: 'male',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'Date of Birth is required';
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Invalid mobile number format';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Form is valid if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newSubmittedData = [...submittedData, { ...formData }];
      setSubmittedData(newSubmittedData);
      setFormData({
        name: '',
        email: '',
        dateOfBirth: '',
        mobileNumber: '',
        gender: 'male',
        message: '',
      });
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number:</label>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Gender:</label>
          <label style={{ marginRight: '15px' }}>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            Male
          </label>
          <label style={{ marginRight: '15px' }}>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
            Other
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h2>Submitted Data:</h2>
        {submittedData.length === 0 ? (
          <p>No data submitted yet.</p>
        ) : (
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <strong>Name:</strong> {data.name}, <strong>Email:</strong> {data.email}, <strong>Date of Birth:</strong> {data.dateOfBirth}, <strong>Mobile Number:</strong> {data.mobileNumber}, <strong>Gender:</strong> {data.gender}, <strong>Message:</strong> {data.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FormComponent;