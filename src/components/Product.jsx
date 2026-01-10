import './Product.css';

const Product = (props) => {
  return (
    <div id="card">
      <img src={props.image} id="cardimg" />

      <div id="carddetail">
        <b>{props.Cardtitle}</b>
        <p>{props.rating}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Product;
