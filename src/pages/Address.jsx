import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Address() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state.product;

  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Address Page</h2>

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button
        onClick={() =>
          navigate('/payment', {
            state: { productId: product._id, quantity },
          })
        }
      >
        Continue
      </button>
    </div>
  );
}

export default Address;
