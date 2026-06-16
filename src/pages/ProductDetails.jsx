// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Footer from '../components/Footer';
// import Navigation from '../components/Navigation';
// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(
//           `https://mern-backend-0zvk.onrender.com/product/${id}`
//         );
//         const data = await res.json();
//         setProduct(data);
//       } catch (error) {
//         console.log('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) return (
//     <>
//   <Navigation />
//       <div
//         style={{
//           height: '600px',
//           width: '100vw',
//           display: 'flex',
//           justifyContent: 'center',
//           backgroundColor: 'white',
//           alignItems: 'center',
//         }}
//       >
//         <h2 style={{ fontSize: '50px' }}>Loading...</h2>
//       </div>
//       <Footer />
//     </>
//   );
//   return (

//     <>
//     <Navigation />
//       <div style={{width:"100vw", height:"900px" , backgroundColor:"white", display:"flex",  justifyContent:"center", alignItems:"center"}}>
//         <div
//           style={{
//             height: '480px',
//             width: '280px',
//             background: 'lightyellow',
//             borderRadius: '12px',
//           }}
//         >
//           <img src={product.image} style={{ height: '70%', width: '100%' }} />
//           <h1>{product.name}</h1>
//           <p>{product.description}</p>
//           <h2>₹{product.price}</h2>
//           <button
//             style={{
//               backgroundColor: 'red',
//               color: 'white',
//               borderRadius: '5px',
//               width: '80px',
//             }}
//           >
//             {' '}
//             Buy Now
//           </button>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default ProductDetails;
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const BASE_URL = 'https://mern-backend-0zvk.onrender.com';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/product/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Pehle login karo! ⚠️');
      navigate('/signin');
      return;
    }
    navigate('/address', { state: { product } });
  };

  if (!product)
    return (
      <>
        <Navigation />
        <div
          style={{
            height: '600px',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '40px',
              background: 'yellow',
              padding: '20px',
              borderRadius: '15px',
            }}
          >
            Loading...
          </h2>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navigation />
      <div
        style={{
          width: '100vw',
          minHeight: '900px',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '520px',
            width: '300px',
            background: 'lightyellow',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={product.image}
            style={{ height: '60%', width: '100%', objectFit: 'cover' }}
            alt={product.name}
          />
          <div style={{ padding: '12px' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '6px' }}>
              {product.name}
            </h2>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
              {product.description}
            </p>
            <h3
              style={{ fontSize: '20px', color: 'green', marginBottom: '12px' }}
            >
              ₹{product.price}
            </h3>
            <p
              style={{
                fontSize: '12px',
                color: product.stock > 0 ? 'green' : 'red',
              }}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : 'Out of Stock'}
            </p>
            <button
              onClick={handleBuyNow}
              disabled={product.stock === 0}
              style={{
                backgroundColor: product.stock > 0 ? 'red' : 'gray',
                color: 'white',
                borderRadius: '5px',
                width: '100%',
                padding: '8px',
                border: 'none',
                cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
                marginTop: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;