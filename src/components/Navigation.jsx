// // // import { useState } from 'react';
// // // import Data from './Data';
// // // import './Navigation.css';

// // // import searchImg from '../assets/WhatsApp Image 2026-01-03 at 11.34.23 AM.jpeg';

// // // const Navigation = () => {
// // //   const [searchText, setSearchText] = useState('');
// // //   const [data, setdata] = useState(Data);

// // //     const getData = (e) => {
// // //       setSearchText(e.target.value);
// // //     };

// // // let filterOut = data.filter((curValue) => {
// // //   return (
// // //     curValue.title.toLowerCase().includes(searchText) ||curValue.rating.toLowerCase().includes(searchText) ||curValue.price.toLowerCase().includes(searchText.toLowerCase())
// // //   );
// // // });

// // // // searchText.toLowerCase();

// // //   return (
// // //     <>
// // //       <div id="uppernavcontroller">
// // //         <div id="cover">
// // //           <input
// // //             type="text"
// // //             placeholder="Search here"

// // //             onChange={getData}
// // //           />

// // //           <button id="buttonsearch">
// // //             <img id="searchimg" src={searchImg} />
// // //           </button>
// // //         </div>

// // //         <div id="uppernav">
// // //           <a href="#">Home</a>
// // //           <a href="#">Shop</a>
// // //           <a href="#">About</a>
// // //           <a id="four" href="#">
// // //             Contact
// // //           </a>
// // //         </div>
// // //       </div>

// // // {
// // // filterOut.map((curValue)=>{
// // // return (
// // //   <div id="card">
// // //     <img src={curValue.image} id="cardimg" />

// // //     <div id="carddetail">
// // //       <b>{curValue.Cardtitle}</b>
// // //       <p>{curValue.rating}</p>
// // //       <p>{curValue.price}</p>
// // //     </div>
// // //   </div>
// // // );
// // // })

// // // }

// // //     </>
// // //   );
// // // };

// // // export default Navigation;
// // import { Link } from 'react-router-dom';
// // import { useState } from 'react';
// // // import Data from './Data';
// // import { products as Data } from './Data';
// // import './search.css'
// // import './Navigation.css';
// // import searchImg from '../assets/WhatsApp Image 2026-01-03 at 11.34.23 AM.jpeg';

// // const Navigation = () => {
// //   const [searchOpen, setsearchOpen] = useState(false);
// //   const [searchText, setSearchText] = useState('');
// // const [menuOpen, setMenuOpen] = useState(false);

// // function menu(){
// //   setMenuOpen(!menuOpen);
// // }

// //   function searchOn(){
// //     setsearchOpen(!searchOpen);
// //   }

// //   const getData = (e) => {

// //     setSearchText(e.target.value);
// //   };

// //   const filterOut = Data.filter((curValue) => {
// //     const search = searchText.trim().toLowerCase();
// //     if (search === "") return false;

// //     return (
// //       String(curValue.title).toLowerCase().includes(search)  ||
// //       String(curValue.rating).toLowerCase().includes(search) ||
// //       String(curValue.price).toLowerCase().includes(search)

// //     );
// //   });

// //   return (
// //     <>
// //       <div id="uppernavcontroller" style={{ backgroundColor: 'yellow' }}>
// //         <div id="cover" style={{ backgroundColor: 'yellow' }}>
// //           <input
// //             type="text"
// //             placeholder="Search here"
// //             value={searchText}
// //             onChange={getData}
// //             onFocus={searchOn}
// //           />

// //           <button id="buttonsearch">
// //             {/* <i  class="fa-brands fa-sistrix"></i> */}
// //             <img id="searchimg" src={searchImg} alt="search" />
// //           </button>
// //         </div>

// //         <div
// //           id="uppernav"
// //           style={{ backgroundColor: 'yellow' }}
// //         >
// //           {/* <a href="#">Home</a>
// //           <a href="#">Shop</a>
// //           <a href="UI\src\components\Contact.jsx">About</a>
// //           <a id="four" href="#">
// //             Contact</a> */}

// //           <Link to="/">Home</Link>
// //           <Link to="/shop">Shop</Link>
// //           <Link to="/contact">MyOrder</Link>
// //           {/* <Link to ="/login">Login</Link> */}
// //         </div>
// //         <button id="threedot" onClick={menu}>
// //           <span className="colorgreen">-</span>
// //           <span>-</span>
// //           <span>-</span>
// //         </button>

// //         <nav id="loginid">
// //           <Link id="form" to="/signin">
// //             Login
// //           </Link>
// //           <Link id="form" to="/signUp">
// //             SignUp
// //           </Link>
// //         </nav>
// //       </div>
// //       <div className="search-results">
// //         {filterOut.map((curValue, index) => (
// //           <div className="search-container">
// //             <div className="search-card" key={index}>
// //               <img
// //                 className="search-img"
// //                 src={curValue.image}
// //                 alt={curValue.title}
// //               />
// //               <b className="search-text">{curValue.title}</b>
// //               <p className="text-white">Rating {curValue.rating} </p>
// //               <p> ${curValue.price} </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {menuOpen && (
// //         <div id="homebargarkikahani">
// //           <Link to="/">Home</Link>
// //           <Link to="/shop">Shop</Link>
// //           <Link to="/order">MyOrder</Link>
// //           <Link to="/signin">Login</Link>
// //           <Link to="/signup">SignUp</Link>
// //         </div>
// //       )}

// //       {/* {
// //         searchOpen  && (searchText !== '') &&  (
// //         <div id='searchDesign'>

// //         </div>

// //         )
// //       } */}
// //     </>
// //   );
// // };

// // export default Navigation;
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { products as Data } from './Data';
// import './search.css';
// import './Navigation.css';
// import searchImg from '../assets/WhatsApp Image 2026-01-03 at 11.34.23 AM.jpeg';

// const Navigation = () => {
//   const navigate = useNavigate();
//   const [searchOpen, setsearchOpen] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);

//   // ✅ Token check
//   const token = localStorage.getItem('token');

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userEmail');
//     alert('Logged out ✅');
//     navigate('/signin');
//   };

//   const getData = (e) => {
//     setSearchText(e.target.value);
//     setsearchOpen(true);
//   };

//   const filterOut = Data.filter((curValue) => {
//     const search = searchText.trim().toLowerCase();
//     if (search === '') return false;
//     return (
//       String(curValue.title).toLowerCase().includes(search) ||
//       String(curValue.rating).toLowerCase().includes(search) ||
//       String(curValue.price).toLowerCase().includes(search)
//     );
//   });

//   return (
//     <>
//       <div id="uppernavcontroller" style={{ backgroundColor: 'yellow' }}>
//         <div id="cover" style={{ backgroundColor: 'yellow' }}>
//           <input
//             type="text"
//             placeholder="Search here"
//             value={searchText}
//             onChange={getData}
//             onFocus={() => setsearchOpen(true)}
//             onBlur={() => setTimeout(() => setsearchOpen(false), 200)}
//           />
//           <button id="buttonsearch">
//             <img id="searchimg" src={searchImg} alt="search" />
//           </button>
//         </div>

//         <div id="uppernav" style={{ backgroundColor: 'yellow' }}>
//           <Link to="/">Home</Link>
//           <Link to="/shop">Shop</Link>
//           <Link to="/myorders">MyOrders</Link>
//         </div>

//         <button id="threedot" onClick={() => setMenuOpen(!menuOpen)}>
//           <span className="colorgreen">-</span>
//           <span>-</span>
//           <span>-</span>
//         </button>

//         <nav id="loginid">
//           {token ? (
//             // ✅ Login hai to Logout button
//             <button
//               onClick={logout}
//               style={{
//                 backgroundColor: 'black',
//                 color: 'yellow',
//                 border: 'none',
//                 padding: '6px 14px',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontWeight: 'bold',
//               }}
//             >
//               Logout
//             </button>
//           ) : (
//             // ✅ Login nahi hai to Login/SignUp links
//             <>
//               <Link id="form" to="/signin">
//                 Login
//               </Link>
//               <Link id="form" to="/signup">
//                 SignUp
//               </Link>
//             </>
//           )}
//         </nav>
//       </div>

//       {/* Search Results */}
//       {searchOpen && filterOut.length > 0 && (
//         <div className="search-results">
//           {filterOut.map((curValue, index) => (
//             <div className="search-container" key={index}>
//               <div className="search-card">
//                 <img
//                   className="search-img"
//                   src={curValue.image}
//                   alt={curValue.title}
//                 />
//                 <b className="search-text">{curValue.title}</b>
//                 <p>{curValue.rating}</p>
//                 <p>{curValue.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div id="homebargarkikahani">
//           <Link to="/">Home</Link>
//           <Link to="/shop">Shop</Link>
//           <Link to="/myorders">MyOrders</Link>
//           {token ? (
//             <button
//               onClick={logout}
//               style={{ background: 'none', border: 'none', cursor: 'pointer' }}
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link to="/signin">Login</Link>
//               <Link to="/signup">SignUp</Link>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Navigation;

import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './search.css';
import './Navigation.css';
import searchImg from '../assets/WhatsApp Image 2026-01-03 at 11.34.23 AM.jpeg';

const BASE_URL = 'https://mern-backend-0zvk.onrender.com';

const Navigation = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // ✅ Backend se products fetch
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/product`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.log('Search fetch error:', err));
  }, []);

  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    alert('Logged out ✅');
    navigate('/signin');
  };

  const getData = (e) => {
    setSearchText(e.target.value);
    setSearchOpen(true);
  };

  // ✅ Backend data se filter
  const filterOut = allProducts.filter((item) => {
    const search = searchText.trim().toLowerCase();
    if (search === '') return false;
    return (
      String(item.name).toLowerCase().includes(search) ||
      String(item.category).toLowerCase().includes(search) ||
      String(item.price).toLowerCase().includes(search)
    );
  });

  return (
    <>
      <div id="uppernavcontroller" >
        <div id="cover" >
          <input
            type="text"
            placeholder="Search here"
            value={searchText}
            onChange={getData}
            onFocus={() => setSearchOpen(true)}
            onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
          />
          <button id="buttonsearch">
            <img id="searchimg" src={searchImg} alt="search" />
          </button>
        </div>

        <div id="uppernav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/myorders">MyOrders</Link>
        </div>

        <button id="threedot" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="colorgreen">-</span>
          <span>-</span>
          <span>-</span>
        </button>

        <nav id="loginid">
          {token ? (
            <button
              onClick={logout}
              style={{
                backgroundColor: 'black',
                color: 'yellow',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link id="form" to="/signin">
                Login
              </Link>
              <Link id="form" to="/signup">
                SignUp
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* ✅ Backend data se search results */}
      {searchOpen && searchText.trim() !== '' && (
        <div className="search-results">
          {filterOut.length === 0 ? (
            <div className="search-container">
              <p style={{ padding: '10px', color: '#666' }}>
                No products found
              </p>
            </div>
          ) : (
            filterOut.map((item) => (
              <div
                className="search-container"
                key={item._id}
                onMouseDown={() => navigate(`/product/${item._id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="search-card">
                  <img
                    className="search-img"
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <b className="search-text">{item.name}</b>
                    <p style={{ fontSize: '12px', color: '#666' }}>
                      {item.category}
                    </p>
                    <p style={{ color: 'green', fontWeight: 'bold' }}>
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="homebargarkikahani">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/myorders">MyOrders</Link>
          {token ? (
            <button
              onClick={logout}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signin">Login</Link>
              <Link to="/signup">SignUp</Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navigation;
