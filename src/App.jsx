
// import { Routes, Route } from 'react-router-dom';
// import Discountdiv from './components/Discountdiv';
// import Navigation from './components/Navigation';
// import Box from './components/Box';
// import Footer from './components/Footer'
// // import Practice from './components/Practice'
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//       <div>
//         <Navigation />
//         <Discountdiv />
//         <Box />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;


//******************Production level Ongoing Construction ****** */

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/shop" element={<Shop />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
