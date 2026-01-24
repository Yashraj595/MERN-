// import { useState } from 'react';
// import Data from './Data';
// import './Navigation.css';

// import searchImg from '../assets/WhatsApp Image 2026-01-03 at 11.34.23 AM.jpeg';

// const Navigation = () => {
//   const [searchText, setSearchText] = useState('');
//   const [data, setdata] = useState(Data);

//     const getData = (e) => {
//       setSearchText(e.target.value);
//     };


// let filterOut = data.filter((curValue) => {
//   return (
//     curValue.title.toLowerCase().includes(searchText) ||curValue.rating.toLowerCase().includes(searchText) ||curValue.price.toLowerCase().includes(searchText.toLowerCase())
//   );
// });


// // searchText.toLowerCase();

//   return (
//     <>
//       <div id="uppernavcontroller">
//         <div id="cover">
//           <input
//             type="text"
//             placeholder="Search here"
            
//             onChange={getData}
//           />

//           <button id="buttonsearch">
//             <img id="searchimg" src={searchImg} />
//           </button>
//         </div>

//         <div id="uppernav">
//           <a href="#">Home</a>
//           <a href="#">Shop</a>
//           <a href="#">About</a>
//           <a id="four" href="#">
//             Contact
//           </a>
//         </div>
//       </div>

// {
// filterOut.map((curValue)=>{
// return (
//   <div id="card">
//     <img src={curValue.image} id="cardimg" />

//     <div id="carddetail">
//       <b>{curValue.Cardtitle}</b>
//       <p>{curValue.rating}</p>
//       <p>{curValue.price}</p>
//     </div>
//   </div>
// );
// })

// }

//     </>
//   );
// };

// export default Navigation;
import { Link } from 'react-router-dom';

import { useState } from 'react';
// import Data from './Data';
import { products as Data } from './Data';

import './Navigation.css';
import searchImg from '../assets/WhatsApp Image 2026-01-03 at 11.34.23 AM.jpeg';

const Navigation = () => {
  const [searchText, setSearchText] = useState('');
const [menuOpen, setMenuOpen] = useState(false);
function menu(){
  setMenuOpen(!menuOpen);
}

  const getData = (e) => {
    setSearchText(e.target.value);
  };

  const filterOut = Data.filter((curValue) => {
    const search = searchText.trim().toLowerCase();
    if (search === "") return false;

    return (
      String(curValue.title).toLowerCase().includes(search)  ||
      String(curValue.rating).toLowerCase().includes(search) ||
      String(curValue.price).toLowerCase().includes(search)  
     
      
    );
  });

  return (
    <>
      <div id="uppernavcontroller">
        <div id="cover">
          <input
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={getData}
          />

          <button id="buttonsearch">
            <img id="searchimg" src={searchImg} alt="search" />
          </button>
        </div>

        <div id="uppernav">
          {/* <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="UI\src\components\Contact.jsx">About</a>
          <a id="four" href="#">
            Contact</a> */}

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button id="threedot" onClick={menu}>
          <span className="colorgreen">-</span>
          <span>-</span>
          <span>-</span>
        </button>

        <nav id="loginid">
          <Link id="form" to="/signin">
          Login
          </Link>
          <span>/</span>
          <Link id="form" to="/signup">
           SignUp
          </Link>
        </nav>
      </div>
      <div className="search-results">
        {filterOut.map((curValue, index) => (
          <div className="search-container">
            <div className="search-card" key={index}>
              <img
                className="search-img"
                src={curValue.image}
                alt={curValue.title}
              />
              <b className="search-text">{curValue.title}</b>
              <p className="text-white">Rating {curValue.rating} </p>
              <p> ${curValue.price} </p>
            </div>
          </div>
        ))}
      </div>
      {menuOpen && (
        <div id="homebargarkikahani">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link  to="/signin">Login</Link>
          <Link  to="/signup">SignUp</Link>
        </div>
      )}
    </>
  );
};

export default Navigation;
