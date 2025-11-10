// import React ,{useState} from 'react';
// import { signup } from "../Services/authService";
// import toast from 'react-hot-toast';

// export default function Signup () {
//     const [formData , setFormData] = useState({
//         name : "",
//         email : "",
//         password : ""
//     })

//     const changeHandler = (e) =>{
//         const {name , value} = e.target;

//         setFormData((prevData) =>({
//             ...prevData,
//             [name] :value
//         }))
//     }

//     const submitHandler = async(e) =>{
//       e.preventDefault();
     
//        console.log("user signup" , formData);

//       //call the backend api and send the data for registration
//       try{
//         const response = await signup(formData);
//         toast.success("User Registred.")

//       }catch(error){
//         console.error("singup failed" , error);
//         toast.error("Error in User Registration.")

//       }
//     }

//     return (
//         <div>

//             <form onSubmit={submitHandler}>


//               <div>
//                 <input type="text"
//                 name = "name"
//                 placeholder = "Enter Your Name.." 
//                 value={formData.value}
//                 onChange={changeHandler}
//                 required
//                 />
//               </div>


//               <div>
//                 <input type="email"
//                 name = "email"
//                 placeholder = "Enter Your Email..."
//                 value = {formData.value}
//                 onChange={changeHandler}
//                 required />
//               </div>

//               <div>
//                 <input type="password"
//                 name = "password"
//                 placeholder='Enter Your Password'
//                 value={formData.value}
//                 onChange={changeHandler}
//                 required />
//               </div>


//             <button type='submit'> Signup</button>
//             </form>

//         </div>
//     )
// }


import React, { useState } from "react";
import { signup } from "../Services/authService";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("user signup", formData);

    try {
      const response = await signup(formData);
      toast.success("User Registered Successfully!");
      navigate("/login"); // Redirect to login page after signup
    } catch (error) {
      console.error("signup failed", error);
      toast.error("Error in User Registration.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={changeHandler}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
