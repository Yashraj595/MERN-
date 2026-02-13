import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './Contact.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [fil, setfil] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setfil({
      ...fil,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!fil.email || !fil.password) {
      alert('All fields are required');
      return;
    }

    try {
      const url = '/user/login';
      const res = await axios.post(url, fil);
      alert('Login success ✅');
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong ❌');
    }
  };

  return (
    <>
      <Navigation />

      <div id="contactouter">
        <h2 className="font-bold">Login / Sign In</h2>

        <div id="contatinner">
          <form onSubmit={submit}>
            <input
              className="forminput"
              type="email"
              name="email"
              placeholder="Enter your registered email"
              value={fil.email}
              onChange={handleChange}
            />

            <input
              className="forminput"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={fil.password}
              onChange={handleChange}
            />

            <button id="submitbutton" type="submit">
              Login
            </button>

            <p>
              Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignIn;
