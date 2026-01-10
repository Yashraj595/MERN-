
import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-text-wrapper">
          <h3 className="footer-text">Privacy Policy</h3>
          <p className="footer-text">© Copy write 2026 YourWebsiteName.</p>

          <p className="footer-text">All rights reserved.</p>

          <p className="footer-text">
            We value your privacy and do not share your personal information
            with third parties without consent.
          </p>
        </div>
      </footer>
  <div id='followheading' >Follow Us </div>
  
      <div id='center'>
        <div id="followus">
          <a className="followus" href="">
            LinkedIn                 
          </a>
          
          <a className="followus" href="">
            Instagram 
          </a>
          
          <a className="followus" href="">
            Facebook 
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
