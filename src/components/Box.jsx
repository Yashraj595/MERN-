// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Product from './Product';
// import './Box.css';

// const Box = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     let ignore = false;

//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/product');
//         const data = await response.json();

//         if (!ignore) {
//           setProducts(data);
//         }
//       } catch (error) {
//         console.log('Error fetching products:', error);
//       }
//     };

//     fetchProducts();

//     return () => {
//       ignore = true;
//     };
//   }, []);

//   return (
//     <div className="outer">
//       <div className="grid">
//         {products.map((item) => (
//           <Link
//             to={`/product/${item._id}`}
//             key={item._id}
//             style={{ textDecoration: 'none', color: 'inherit' }}
//           >
//             <Product
//               Cardtitle={item.name}
//               rating="⭐ 4.5"
//               price={`₹${item.price}`}
//               image={item.image}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Box;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import './Box.css';

const Box = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://mern-backend-0zvk.onrender.com/product');
      // const res = await axios.get("https://mern-backend-0zvk.onrender.com/product");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // 🔥 FILTER LOGIC
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    // <div className="outer">
    //   {/* 🔍 SEARCH BAR */}
    //   <input
    //     type="text"
    //     placeholder="Search product..."
    //     value={search}
    //     onChange={(e) => setSearch(e.target.value)}
    //     style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
    //   />

      <div className="grid">
        {filteredProducts.map((item) => (
          <Link to={`/product/${item._id}`} key={item._id}>
            <Product
              Cardtitle={item.name}
              price={`₹${item.price}`}
              image={item.image}
            
            />
          </Link>
        ))}
      </div>
    
  );
};

export default Box;