import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Navigation />
      
      <div id="contactouter">
        <h2>Contact Form</h2>
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
              placeholder="Enter your email"
            />

            {/* <label>Phone</label><br /> */}
            <input
              className="forminput"
              type="tel"
              placeholder="Enter your phone number"
            />

            {/* <label>Message</label><br /> */}
            <textarea
              className="forminput"
              placeholder="Write your message"
            ></textarea>

            <button id='submitbutton' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
