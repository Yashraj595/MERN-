// import Navigation from '../components/Navigation';
// import Discountdiv from '../components/Discountdiv';
// import Box from '../components/Box';
// import Footer from '../components/Footer';
// import Product from '../components/Product';
// import HomePageDesign from '../components/HomePageDesign';
// import { useState } from 'react';

// const Shop = () => {

//   const [product, setproduct] = useState(null);
//   fetch

//    if (!product)
//      return (
//        <>
//          <Navigation />
//          <div
//            style={{
//              height: '600px',
//              width: '100vw',
//              display: 'flex',
//              justifyContent: 'center',
//              backgroundColor: 'white',
//              alignItems: 'center',
//            }}
//          >
//            <h2 style={{ fontSize: '50px' }}>Loading...</h2>
//          </div>
//          <Footer />
//        </>
//      );

//   return (
//     <>
//       <Navigation />

//       <Box />
//       <Footer />
//     </>
//   );
// };

// export default Shop;

import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Box from '../components/Box';

const Shop = () => {
  const [products, setProducts] = useState(null);

  // ✅ Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          'https://mern-backend-0zvk.onrender.com/product',
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Loading UI
  if (!products) {
    return (
      <>
        <Navigation />
        <div
          style={{
            height: '800px',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '',
            alignItems: 'center',
          
          }}
        >
          <h2 style={{ fontSize: '40px', height:"200px", width:"300px", background:"yellow", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"15px" }}>Loading...</h2> 
          
        </div>
        <Footer />
      </>
    );
  }

  // ✅ Main UI
  return (
    <>
      <Navigation />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
          backgroundColor: 'white',
        }}
      >
        {products.map((p) => (
          <Box key={p._id} product={p} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Shop;
//*********************************************************************************************************
// import { useEffect, useState } from 'react';
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
// import Box from '../components/Box';

// const Shop = () => {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch(
//           'https://mern-backend-0zvk.onrender.com/product',
//         );
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.log('Error:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

  // if (!products) {
  //   return (
  //     <>
  //       <Navigation />
  //       <div
  //         style={{
  //           height: '600px',
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <h2>Loading...</h2>
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }

//   return (
//     <>
//       <Navigation />

//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '20px',
//           justifyContent: 'center',
//         }}
//       >
//         {products.map((p) => (
//           <Box key={p._id} product={p} />
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Shop;