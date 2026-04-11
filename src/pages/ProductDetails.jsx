import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://mern-backend-0zvk.onrender.com/product/${id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return (
    <>
  <Navigation />
      <div
        style={{
          height: '600px',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: '50px' }}>Loading...</h2>
      </div>
      <Footer />
    </>
  );
  return (

    <>
    <Navigation />
      <div style={{width:"100vw", height:"900px" , backgroundColor:"white", display:"flex",  justifyContent:"center", alignItems:"center"}}>
        <div
          style={{
            height: '480px',
            width: '280px',
            background: 'lightyellow',
            borderRadius: '12px', 
          }}
        >
          <img src={product.image} style={{ height: '70%', width: '100%' }} />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>₹{product.price}</h2>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '5px',
              width: '80px',
            }}
          >
            {' '}
            Buy Now
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;
