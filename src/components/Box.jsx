import Product from './Product';
import './Box.css';
import  './Data';
const Box = () => {
  return (
    <div className="outer">
      <div className="grid">
        <Product
          Cardtitle="Shirts"
          rating="Rating 4.5 ⭐"
          price="₹999"
          image="/images/premium_Shirts.avif"
        />
        <Product
          Cardtitle="T-Shirts"
          rating=" Rating 4.5 ⭐"
          price="₹1999"
          image="/images/premium_T_shirt.avif"
        />
        <Product
          Cardtitle="Cotton T-Shirt"
          rating=" Rating 4.5 ⭐"
          price="₹299"
          image="/images/male_t_shirt.avif"
        />
        <Product
          Cardtitle="Soft Collection"
          rating="Rating 4.5 ⭐"
          price="₹499"
          image="/images/bulk.avif"
        />
        <Product
          Cardtitle="Jeans collection"
          rating="Rating 4.5 ⭐"
          price="₹4999 (50% off)"
          image="/images/jeans_collection.avif"
        />
        <Product
          Cardtitle="Shirt Collection"
          rating=" Rating 4.5 ⭐"
          price="₹2199"
          image="/images/shirtscollection.avif"
        />
        <Product
          Cardtitle="Cotton Sweater"
          rating="Rating 4.5 ⭐"
          price="₹999"
          image="/images/sweater.avif"
        />
        <Product
          Cardtitle=" Formal Shirts"
          rating=" Rating 4.5 ⭐"
          price=" ₹1599"
          image="/images/top_class_shirt.avif"
        />

        <Product
          Cardtitle="Raymond Collection"
          rating=" Rating 4.5 ⭐"
          price="₹7999"
          image="/images/female_blaser.avif"
        />
        <Product
          Cardtitle=" Girls Jeans"
          rating=" Rating 4.5 ⭐"
          price="₹3599"
          image="/images/female_jeans.avif"
        />
        <Product
          Cardtitle="Tops Sales"
          rating=" Rating 4.5 ⭐"
          price="₹500"
          image="/images/femaletopcollection.avif"
        />
        <Product
          Cardtitle="Plain T-shirts"
          rating=" Rating 4.5 ⭐"
          price="₹699 (30% off)"
          image="/images/full_tshirt_.avif"
        />
      </div>
    </div>
  );
};

export default Box;










//*********************************On Construction work is going on here onwards ***** */

// import { useEffect, useState } from 'react';
// import Product from './Product';
// import './Box.css';

// const Box = () => {
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     const response = await fetch('http://localhost:5000/products');
//     const data = await response.json();
//     setProducts(data);
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className="outer">
//       <div className="grid">
//         {products.map((item) => (
//           <Product
//             key={item._id}
//             Cardtitle={item.title}
//             rating={`Rating ${item.rating} ⭐`}
//             price={`₹${item.price}`}
//             image={item.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Box;
