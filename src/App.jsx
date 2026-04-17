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

// import { Routes, Route } from 'react-router-dom';

// import Shop from './pages/Shop';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import NewHome from './pages/NewHome';
// import HomePageDesign from './components/HomePageDesign';
// import SecondHome from './components/SecondHome';

// import './index.css'

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<NewHome />} />
//       <Route path="/shop" element={<Shop />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/signin" element={<SignIn />} />
//       <Route path="/signup" element={<SignUp />} />

//       <Route path="/shop" element={<HomePageDesign />} />

//       <Route />

//       <Route  path="/shop" > </Route>
//     </Routes>
//   );
// };

// export default App;

// import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import Shop from './pages/Shop';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import NewHome from './pages/NewHome';
// import ProductDetails from './pages/ProductDetails';

// import './index.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<NewHome />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* 🔥 Important Route */}
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
import { Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop';


import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NewHome from './pages/NewHome';
import ProductDetails from './pages/ProductDetails';
import Address from './pages/Address';
import Payment from './pages/Payment';
import MyOrders from './pages/MyOrders';
import './index.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewHome />} />
      <Route path="/shop" element={<Shop />} />
    
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/myorders" element={<MyOrders />} />
      {/* Product Details */}
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default App;
