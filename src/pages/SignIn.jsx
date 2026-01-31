import Footer from '../components/Footer'
import React from 'react'
import './Contact.css'
import Navigation from '../components/Navigation'

const SignIn = () => {


  function submit(){
    alert("Successfully Logined ")
  }
  return (
    <>
      <Navigation />

      <div id="contactouter">
        <h2 className=" font-bold">Login/Sign In </h2>
        <div id="contatinner">
          <form>
            <input
              className="forminput"
              type="text"
              placeholder="Enter your registered email"
            />

            <input
              className="forminput"
              type="password"
              placeholder="Enter your password"
            />

            <button onClick={submit} id="submitbutton" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn
