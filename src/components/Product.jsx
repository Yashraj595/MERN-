// import './Product.css';

// const Product = (props) => {
//   return (
//     <div id="card">
//       <img src={props.image} id="cardimg" />

//       <div id="carddetail">
//         <b style={{ fontSize: '15px' }}>{props.Cardtitle}</b>

//         <p style={{ fontSize: '15px' }}>{props.price}</p>
//         <button
//           style={{
//             backgroundColor: 'red',
//             color: 'white',
//             width: '80px',
//             height: '25px',
//             borderRadius: '4px',
//             fontSize: '10px',
//             overflow: 'hidden',
//           }}
//         >
//           BuyNow
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Product;
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.preventDefault(); // Link ka navigate rokta hai
    e.stopPropagation();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Pehle login karo! ⚠️');
      navigate('/signin');
      return;
    }
    navigate('/address', { state: { product: props.productData } });
  };

  return (
    <div id="card">
      <img src={props.image} id="cardimg" alt={props.Cardtitle} />
      <div id="carddetail">
        <b style={{ fontSize: '15px' }}>{props.Cardtitle}</b>
        <p style={{ fontSize: '15px' }}>{props.price}</p>
        <button
          onClick={handleBuyNow}
          style={{
            backgroundColor: 'red',
            color: 'white',
            width: '80px',
            height: '25px',
            borderRadius: '4px',
            fontSize: '10px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;