import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert('All fields are required');
      return;
    }

    try {
      const url = '/user/register';
    
      const res = await axios.post(url, formData);

      alert('Successfully SignUp ✅');

      setFormData({
        name: '',
        email: '',
        password: '',
      });

      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed ❌');
    }
  };

  return (
    <>
      <Navigation />

      <div id="contactouter">
        <h2>SignUp Form</h2>

        <div id="contatinner">
          <form onSubmit={submit}>
            <input
              className="forminput"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className="forminput"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="forminput"
              type="password"
              name="password"
              placeholder="Set new password"
              value={formData.password}
              onChange={handleChange}
            />

            <button id="submitbutton" type="submit">
              SignUp
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
