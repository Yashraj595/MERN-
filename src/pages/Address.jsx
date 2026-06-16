// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// function Address() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const product = location.state.product;

//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div>
//       <h2>Address Page</h2>

//       <input
//         type="number"
//         value={quantity}
//         onChange={(e) => setQuantity(e.target.value)}
//       />

//       <button
//         onClick={() =>
//           navigate('/payment', {
//             state: { productId: product._id, quantity },
//           })
//         }
//       >
//         Continue
//       </button>
//     </div>
//   );
// }

// export default Address;
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Address = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    pincode: '',
  });

  if (!product) {
    navigate('/shop');
    return null;
  }

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.pincode
    ) {
      alert('Saara address bharo ⚠️');
      return;
    }
    navigate('/payment', {
      state: { productId: product._id, quantity, address, product },
    });
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
          padding: '20px',
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
          <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>
            📦 Delivery Address
          </h2>

          {/* Product Info */}
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '16px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <img
              src={product.image}
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'cover',
                borderRadius: '6px',
              }}
              alt={product.name}
            />
            <div>
              <b>{product.name}</b>
              <p style={{ color: 'green' }}>₹{product.price}</p>
            </div>
          </div>

          {/* Quantity */}
          <label style={{ fontWeight: 'bold' }}>Quantity:</label>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
            }}
          />

          {/* Address Fields */}
          {[
            { name: 'fullName', placeholder: 'Full Name' },
            { name: 'phone', placeholder: 'Phone Number' },
            { name: 'street', placeholder: 'Street / Area' },
            { name: 'city', placeholder: 'City' },
            { name: 'pincode', placeholder: 'Pincode' },
          ].map((field) => (
            <input
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={address[field.name]}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            />
          ))}

          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '16px',
            }}
          >
            <b>Total: ₹{product.price * quantity}</b>
          </div>

          <button
            onClick={handleContinue}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Continue to Payment →
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Address;