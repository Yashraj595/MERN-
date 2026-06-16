// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function MyOrders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://mern-backend-0zvk.onrender.com/order')
//       .then((res) => setOrders(res.data));
//   }, []);

//   return (
//     <div>
//       <h2>My Orders</h2>

//       {orders.map((o, i) => (
//         <div key={i}>
//           <p>{o.product.name}</p>
//           <p>₹{o.totalPrice}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyOrders;
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://mern-backend-0zvk.onrender.com';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Pehle login karo ⚠️');
      navigate('/signin');
      return;
    }
    axios
      .get(`${BASE_URL}/order/myorders`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert('Orders load nahi hue ❌');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navigation />
      <div
        style={{ minHeight: '80vh', padding: '20px', backgroundColor: 'white' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          📋 My Orders
        </h2>

        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}

        {!loading && orders.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{ fontSize: '18px', color: '#666' }}>
              Koi order nahi mila
            </p>
            <button
              onClick={() => navigate('/shop')}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Shop Now
            </button>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          {orders.map((order, i) => (
            <div
              key={i}
              style={{
                width: '280px',
                background: 'lightyellow',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <img
                  src={order.productID?.image}
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                  alt={order.productID?.name}
                />
                <div>
                  <b>{order.productID?.name}</b>
                  <p style={{ fontSize: '13px', color: '#555' }}>
                    Qty: {order.quantity}
                  </p>
                  <p style={{ color: 'green', fontWeight: 'bold' }}>
                    ₹{order.totalPrice}
                  </p>
                </div>
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#888',
                  borderTop: '1px solid #eee',
                  paddingTop: '8px',
                }}
              >
                Ordered: {new Date(order.createdAt).toLocaleDateString('en-IN')}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;