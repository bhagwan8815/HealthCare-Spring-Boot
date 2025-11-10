import React from "react";
import { Link } from "react-router-dom";
import homepageimg from "../assests/home-img.webp";
import cancerimg from "../assests/cancer.webp";
import virtualdoctorimg from '../assests/virtual-doctor.webp'
import mentalhealthimg from '../assests/mental-health.webp'

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health<span className="text-yellow-300">Care+</span>
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              Your Virtual Doctor and Medicine Advisor at your fingertips. Get
              personalized advice and recommendations 24/7.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/chatbot"
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300"
              >
                Chat with Doctor
              </Link>
              <Link
                to="/takemedicine"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Medicine Advisor
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={homepageimg}
              alt="Doctor consulting"
              className="rounded-2xl shadow-xl "
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Virtual Doctor */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-center">
            <img
              src={virtualdoctorimg}
              alt="Virtual Doctor"
              className="mx-auto mb-4"
               style={{ width: "140px", height: "140px" }}
            />
            <h3 className="text-xl font-semibold mb-2">Virtual Doctor</h3>
            <p className="text-gray-600">
              Chat with our AI-powered virtual doctor anytime and get health
              advice instantly.
            </p>
            <Link
              to="/chatbot"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Start Chat
            </Link>
          </div>

          {/* Medicine Advisor */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-center">
            <img
              src="https://img.icons8.com/fluency/96/000000/pill.png"
              alt="Medicine Advisor"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Medicine Advisor</h3>
            <p className="text-gray-600">
              Get accurate medicine recommendations and dosage advice based on
              your symptoms.
            </p>
            <Link
              to="/takemedicine"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Get Advice
            </Link>
          </div>

          {/* Diet & Lifestyle (Optional) */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-center">
            <img
              src="https://img.icons8.com/fluency/96/000000/apple.png"
              alt="Diet Plan"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Diet & Lifestyle</h3>
            <p className="text-gray-600">
              Personalized diet plans and lifestyle tips to improve your overall
              health.
            </p>
            <Link
              to="/diet-plan"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Learn More
            </Link>
          </div>

          {/* Cancer Treatment */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-center">
            <img
              src={cancerimg}
              alt="Virtual Doctor"
              style={{ width: "160px", height: "160px" }}
              className="mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">Cancer Care</h3>
            <p className="text-gray-600">
              Chat with our AI-powered virtual doctor to get Treatment and
              Medicine for Cancer.
            </p>
            <Link
              to="/chatbot"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Start Chat
            </Link>
          </div>



          {/* mental health */}
           <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-center">
            <img
              src={mentalhealthimg}
              alt="Virtual Doctor"
              style={{ width: "160px", height: "160px" }}
              className="mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">Cancer Care</h3>
            <p className="text-gray-600">
              Chat with our AI-powered virtual doctor to get Treatment and
              Medicine for Cancer.
            </p>
            <Link
              to="/chatbot"
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
            >
              Start Chat
            </Link>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default HomePage;
