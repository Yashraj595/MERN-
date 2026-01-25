// import './SignIn';
// import React from 'react';
// import './Contact.css';
// import Navigation from '../components/Navigation';


 

// const SignUp= () => {
//   function submit() {
//     alert('Successfully SignUp ');
//   }
//   return (
//     <>
//       <Navigation />

//       <div id="contactouter">
//         <h2 className=" font-bold"> SignUp Form</h2>
//         <div id="contatinner">
//           <form>
//             <input
//               className="forminput"
//               type="text"
//               placeholder="Enter your name"
//             />

//             <input
//               className="forminput"
//               type="email"
//               placeholder="Enter user name "
//             />

            
//             <input
//               className="forminput"
//               type="tel"
//               placeholder="Enter your email"
//             />

//             <input
//               className="forminput"
//               type="number"
//               placeholder="Enter your phone number"
//             />

//             <input
//               className="forminput"
//               type="password"
//               placeholder="Enter new password / Set new password"
//             />


//             <button onClick={submit} id="submitbutton" type="submit">
//               SignUp
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Navigation from '../components/Navigation';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',

    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
  };

  const submit = async (e) => {
    e.preventDefault(); // page reload stop

    try {
      const res = await axios.post('http://localhost:3000/signup', formData);

      alert('Successfully SignUp ✅');


     setFormData({
       name: '',
       
       email: '',
       phone: '',
       password: '',
     });


      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed ❌');
       setFormData({
         name: '',
         
         email: '',
         phone: '',
         password: '',
       });
    }
  };

  return (
    <>
      <Navigation />

      <div id="contactouter">
        <h2 className="font-bold">SignUp Form</h2>

        <div id="contatinner">
          <form onSubmit={submit}>
            <input
              className="forminput"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            
            <input
              className="forminput"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="forminput"
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              className="forminput"
              type="password"
              name="password"
              placeholder="Set new password"
              value={formData.password}
              onChange={handleChange}
            />

            <button id="submitbutton" type="submit">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  )
};

export default SignUp;
