import { useEffect, useState } from 'react';
import axios from 'axios';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('https://mern-backend-0zvk.onrender.com/order')
      .then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map((o, i) => (
        <div key={i}>
          <p>{o.product.name}</p>
          <p>₹{o.totalPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default MyOrders;
