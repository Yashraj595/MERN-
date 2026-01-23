import './SignIn';
import React from 'react';
import './Contact.css';
import Navigation from '../components/Navigation';

const SignIn = () => {
  function submit() {
    alert('Successfully SignUp ');
  }
  return (
    <>
      <Navigation />

      <div id="contactouter">
        <h2 className=" font-bold"> SignUp Form</h2>
        <div id="contatinner">
          <form>
            <input
              className="forminput"
              type="text"
              placeholder="Enter your name"
            />

            <input
              className="forminput"
              type="email"
              placeholder="Enter user name "
            />

            {/* <label>Phone</label><br /> */}
            <input
              className="forminput"
              type="tel"
              placeholder="Enter your email"
            />

            <input
              className="forminput"
              type="number"
              placeholder="Enter your phone number"
            />

            <input
              className="forminput"
              type="password"
              placeholder="Enter new password / Set new password"
            />

            {/* <label>Message</label><br /> */}

            <button onClick={submit} id="submitbutton" type="submit">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
