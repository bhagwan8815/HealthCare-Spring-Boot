import React from 'react';
import "./App.css";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate , Route , Routes} from "react-router-dom";
import  HomePage  from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage  from './Pages/SignupPage';
import ChatBot from './Components/Chatbot';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import ChatbotPage from './Pages/ChatbotPage';
import Footer from './Components/Footer';


function App() {
 
  return (
    <div className='mt-2 '>

      <Navbar/>

     <Routes>

         <Route path="/" element={<HomePage/>}/>
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/signup" element={<SignupPage/>} />
                  <Route path="/chatbot" element={<ChatbotPage/>} />
         {/* <Route path="./chatbot" element={
              <ProtectedRoute>
                <Chatbot/>
              </ProtectedRoute>
               } /> */}
          {/* <Route path="*" element={<Navigate to= "/" replace />} /> */}

    </Routes>
 <Footer/>
     <Toaster />
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import HomePage from './Pages/HomePage';

// function App() {
//   // Simulate user login state (in a real app, this would come from context or auth)
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => setIsLoggedIn(true);
//   const handleLogout = () => setIsLoggedIn(false);

//   return (

//   <div>
//     <HomePage/>

//       <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-blue-600">HealthCare</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <a href="#chatbot" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
//                 Chatbot
//               </a>
//               <a href="#medicine" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
//                 Medicine Recommendation
//               </a>
//               {isLoggedIn ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleLogin}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={handleLogin}
//                     className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
//                   >
//                     Signup
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-4">Your Health, Our Priority</h2>
//           <p className="text-xl mb-8">
//             Discover personalized healthcare solutions with our AI-powered chatbot, medicine recommendations, and diet plans tailored to your needs.
//           </p>
//           <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
//             Get Started
//           </button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Service 1: Medical Chatbot */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
//               <div className="text-4xl mb-4">🤖</div>
//               <h4 className="text-xl font-semibold mb-2">Medical Chatbot</h4>
//               <p className="text-gray-600">
//                 Interact with our AI-powered chatbot for instant health advice, symptom checking, and general medical queries.
//               </p>
//             </div>
//             {/* Service 2: Medicine Recommendation */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
//               <div className="text-4xl mb-4">💊</div>
//               <h4 className="text-xl font-semibold mb-2">Medicine Recommendation</h4>
//               <p className="text-gray-600">
//                 Get personalized medicine suggestions based on your symptoms and medical history.
//               </p>
//             </div>
//             {/* Service 3: Diet Plan */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
//               <div className="text-4xl mb-4">🥗</div>
//               <h4 className="text-xl font-semibold mb-2">Diet Plan</h4>
//               <p className="text-gray-600">
//                 Receive customized diet plans designed according to your specific diseases and nutritional needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h5 className="text-lg font-semibold mb-4">HealthCare</h5>
//               <p className="text-gray-400">
//                 Empowering your health journey with innovative technology.
//               </p>
//             </div>
//             <div>
//               <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
//               <ul className="space-y-2">
//                 <li><a href="#chatbot" className="text-gray-400 hover:text-white">Chatbot</a></li>
//                 <li><a href="#medicine" className="text-gray-400 hover:text-white">Medicine Recommendation</a></li>
//                 <li><a href="#diet" className="text-gray-400 hover:text-white">Diet Plan</a></li>
//               </ul>
//             </div>
//             <div>
//               <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
//               <p className="text-gray-400">Email: support@healthcare.com</p>
//               <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
//             </div>
//           </div>
//           <div className="mt-8 border-t border-gray-700 pt-4 text-center">
//             <p className="text-gray-400">&copy; 2023 HealthCare. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   </div>
  
//   );
// }

// export default App;
