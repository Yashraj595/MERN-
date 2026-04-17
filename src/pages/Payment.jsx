import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { productId, quantity } = location.state;

  const handlePayment = async () => {
    await axios.post(
      `https://mern-backend-0zvk.onrender.com/order/buy/${productId}`,
      { quantity },
    );

    navigate('/myorders');
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
