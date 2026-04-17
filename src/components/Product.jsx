import './Product.css';

const Product = (props) => {
  return (
    <div id="card">
      <img src={props.image} id="cardimg" />

      <div id="carddetail">
        <b style={{ fontSize: '15px' }}>{props.Cardtitle}</b>

        <p style={{ fontSize: '15px' }}>{props.price}</p>
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            width: '80px',
            height: '25px',
            borderRadius: '4px',
            fontSize: '10px',
            overflow: 'hidden',
          }}
        >
          BuyNow
        </button>
      </div>
    </div>
  );
};

export default Product;
