import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './About.css'

const About = () => {
  return (
    <>
      <Navigation />

      <div className="aboutouterdiv">
        <div className="aboutinnerdiv">
          <h3 className='text-back font-bold '>About us </h3>
          <p className='abouttext'>
            Welcome to our website. This platform has been created with
            the purpose of learning, building, and sharing knowledge related to
            technology and web development. In today’s digital world, having a
            strong understanding of modern tools and concepts is very important,
            and our aim is to move step by step in that direction. This project
            is a part of our learning journey where we focus on understanding
            the basics as well as practical implementation. Instead of only
            reading theory, we believe in learning by doing. Every page,
            component, and feature of this website is designed to improve
            clarity, confidence, and hands-on experience. The main intention is
            not perfection, but continuous improvement. Our website emphasizes
            simplicity and usability. We try to keep the design clean so that
            
            features, better design, and advanced functionality. As our
            knowledge grows, we plan to update and enhance the website
            accordingly. This could include interactive elements, improved
            styling, and optimized performance. The journey of learning never
            stops, and this website will continue to evolve with time.
          </p>
        </div>
      </div>
    </>
  );
}; 

export default About;
