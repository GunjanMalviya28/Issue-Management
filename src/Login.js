import React, { useState } from 'react';
import './Login.css'; // Import CSS file

const Login = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending the data to the server
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
}

export default Login;
