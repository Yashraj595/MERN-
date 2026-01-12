import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Navigation />

      <div id="contactouter">
        <div id="contatinner">
         
          

      <form>
        
        
        <input type="text" placeholder="Enter your name" />

        
        
        <input type="email" placeholder="Enter your email" />

        
        {/* <label>Phone</label><br /> */}
        <input type="tel" placeholder="Enter your phone number" />

        
        {/* <label>Message</label><br /> */}
        <textarea placeholder="Write your message"></textarea>

        
        <button type="submit">Submit</button>
      </form>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
