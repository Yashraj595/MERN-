// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Payment() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { productId, quantity } = location.state;

//   const handlePayment = async () => {
//     await axios.post(
//       `https://mern-backend-0zvk.onrender.com/order/buy/${productId}`,
//       { quantity },
//     );

//     navigate('/myorders');
//   };

//   return (
//     <div>
//       <h2>Payment Page</h2>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// }

// export default Payment;
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BASE_URL = 'https://mern-backend-0zvk.onrender.com';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId, quantity, address, product } = location.state || {};

  if (!productId) {
    navigate('/shop');
    return null;
  }

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${BASE_URL}/order/buy/${productId}`,
        { quantity },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      alert('Order placed successfully! 🎉');
      navigate('/myorders');
    } catch (error) {
      alert(error.response?.data?.message || 'Order failed ❌');
    }
  };

  return (
    <>
      <Navigation />
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            width: '380px',
            background: 'lightyellow',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            💳 Payment
          </h2>

          {/* Order Summary */}
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
            }}
          >
            <h3 style={{ marginBottom: '8px' }}>Order Summary</h3>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <img
                src={product?.image}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
                alt={product?.name}
              />
              <div>
                <b>{product?.name}</b>
                <p>Qty: {quantity}</p>
                <p style={{ color: 'green', fontWeight: 'bold' }}>
                  ₹{product?.price * quantity}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
              fontSize: '13px',
            }}
          >
            <h3 style={{ marginBottom: '6px' }}>Delivery Address</h3>
            <p>{address?.fullName}</p>
            <p>
              {address?.street}, {address?.city}
            </p>
            <p>Pincode: {address?.pincode}</p>
            <p>Phone: {address?.phone}</p>
          </div>

          {/* Payment Mode (Dummy) */}
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '16px',
            }}
          >
            <h3 style={{ marginBottom: '8px' }}>Payment Mode</h3>
            <label
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <input type="radio" defaultChecked /> Cash on Delivery (COD)
            </label>
          </div>

          <button
            onClick={handlePayment}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ✅ Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;