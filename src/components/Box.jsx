import Product from './Product';
import './Box.css';
import  './Data';
const Box = () => {
  return (
    <div className="outer">
      <div className="grid">
        <Product
          Cardtitle="Blazer"
          rating="4.5 ⭐"
          price="₹2999"
          image="/images/premium_Shirts.avif"
        />
        <Product
          rating=" Rating 4.5 ⭐"
          price="₹2999"
          image="/images/premium_T_shirt.avif"
        />
        <Product
          Cardtitle="Raymond Collection"
          rating=" Rating 4.5 ⭐"
          price="₹2999"
          image="/images/male_t_shirt.avif"
        />
        <Product
          Cardtitle="Premium Collection"
          rating="Rating 4.5 ⭐"
          price="₹2999"
          image="/images/bulk.jpg"
        />
        <Product
          Cardtitle="Innerwear"
          rating="Rating 4.5 ⭐"
          price="₹2999"
          image="/images/jeans_collection.avif"
        />
        <Product
          Cardtitle="Shirt Collection"
          rating=" Rating 4.5 ⭐"
          price="₹2999"
          image="/images/shirtscollection.jpg"
        />
        <Product
          Cardtitle="Cotton Sweater"
          rating="Rating 4.5 ⭐"
          price="₹2999"
          image="/images/sweater.jpg"
        />
        <Product
          Cardtitle=""
          rating=" Rating 4.5 ⭐"
          price="₹2999"
          image="/images/top_class_shirt.avif"
        />

        <Product
          Cardtitle="Raymond Collection"
          rating=" Rating 4.5 ⭐"
          price="₹2999"
          image="/images/female_blaser.avif"
        />
        <Product
          Cardtitle=""
          rating=" Rating 4.5 ⭐"
          price="₹2999"
          image="/images/female_jeans.avif"
        />
        <Product
          Cardtitle=""
          rating=" Rating 4.5 ⭐"
          price="₹"
          image="/images/femaletopcollection.avif"
        />
        <Product
          Cardtitle="Raymond Collection"
          rating=" Rating 4.5 ⭐"
          price="₹2999 "
          image="/images/full_tshirt_.avif"
        />
      </div>
    </div>
  );
};

export default Box;
