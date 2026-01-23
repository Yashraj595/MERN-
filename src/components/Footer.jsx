
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
      <div id="followheading">Follow Us </div>

      <div id="center">
        <div id="followus">
          <a
            className="followus"
            href="www.linkedin.com/in/yashraj-singh-thakur-7b3b05331"
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            className="followus"
            href="https://www.instagram.com/yashrajsinghthakur520?igsh=NDc4ZXcwdnZnd3ox"
            target="_blank"
          > Instagram   </a>

          <a
            className="followus"
            href="https://www.facebook.com/share/1CHCtBAaeo/"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
