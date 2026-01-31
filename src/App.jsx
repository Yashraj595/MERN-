
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

import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NewHome from './pages/NewHome';

import './index.css'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewHome />} />
      <Route path="/shop" element={<Shop />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path='/signin' element={<SignIn/>} />
       <Route path='/signup' element={<SignUp/>} />

      <Route />
    </Routes>
  );
};

export default App;
