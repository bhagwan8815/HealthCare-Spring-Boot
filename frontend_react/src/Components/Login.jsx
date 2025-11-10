import React, { useState } from "react";
import { login } from "../Services/authService";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    try {
      const data = await login(formData);
      toast.success("User Logged in Successfully!");

      // Store token, username, email in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.name);
      localStorage.setItem("email", data.email);

      console.log("User login successfully.")
      console.log(data.token);
      console.log(data.name);
      console.log(data.email);

      // Redirect to home page or refresh UI
      navigate("/"); 
    } catch (err) {
      console.error("Login failed:", err.message);
      toast.error("Error in Login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
         Hello! <span className="text-yellow-500">Welcome</span> back
        </h2>

        <form onSubmit={submitHandler} className="space-y-4">
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
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}







// import React, { useState } from "react";
// import {login } from "../Services/authService";
// import toast from "react-hot-toast";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const changeHandler =(e)=>{
//     const {name , value} = e.target;

//     setFormData((prevData)=>({
//         ...prevData,
//         [name]:value
//     }))
//   }

//   const submitHandler = async (e)=>{
//     e.preventDefault();
   
//     try {
//             const data = await login(formData);
//            toast.success("User Login Successfully.")
//             // Store token, username, email in localStorage
//             localStorage.setItem("token", data.token);
//             localStorage.setItem("username", data.name);
//             localStorage.setItem("email", data.email);

//             window.location.reload();

//             console.log("Login successful!");
//             console.log("Token:", data.token);
//             console.log("Username:", data.name);
//             console.log("Email:", data.email);
            

//             // Redirect or update UI after login
//         } catch (err) {
//             console.error("Login failed:", err.message);
//             toast.error("Error in Login.")
           
//         }

   
//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Your Email"
//             value={formData.value}
//             onChange={changeHandler}
//             required
//           />
//         </div>


//         <div>
//             <input type="password"
//             name = "password"
//             value = {formData.value}
//             placeholder="Enter Your Password"
//             onChange={changeHandler}
//             required />
//         </div>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
