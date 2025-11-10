import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            HealthCare<span className="text-yellow-300">+</span>
          </h2>
          <p className="text-gray-200">
            Your virtual doctor and medicine advisor. Get health advice and recommendations anytime, anywhere.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-200 space-y-2">
            <li>Email: support@healthcareplus.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Website: www.healthcareplus.com</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="text-gray-200">
            HealthCare+ HQ <br />
            123 Wellness Street <br />
            Cityville, State, 123456 <br />
            India
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-blue-700 text-center py-4 text-gray-200 mt-4">
        &copy; 2025 HealthCare+. Developed by HealthCare+ Team.
      </div>
    </footer>
  );
}
