import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-indigo-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">Welcome to e-PMSSS</h1>
          <p className="text-lg md:text-xl mb-8">Empowering students with the tools and resources to manage their scholarships effectively.</p>
          <Link 
            to="/signup" 
            className="bg-white text-blue-700 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition ease-in-out duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12"> e-PMSSS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105 relative">
              <div className="absolute inset-0 bg-orange-300 opacity-20 rounded-lg"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">What is Pmsss</h3>
                <p className="text-gray-700">The Prime Minister's Special Scholarship Scheme (PMSSS) is an initiative which was launch in the year 2011 by the all india Council for technical education (AICTE)aimed at providing financial assistance for the students who are domicile of the UTs of J&K and Ladakh who, after passing Class 12th or equivalent examination, secure admission in government colleges/institutions and other select institutions, to pursue higher education in various parts of India. The scheme is designed to promote educational development and provide equal opportunities for students from these regions. It covers expenses such as tuition fees, hostel fees, and other related costs, thereby supporting students in obtaining quality education and fostering their overall growth and development</p>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105 relative">
  <div className="absolute inset-0 bg-orange-300 opacity-20 rounded-lg"></div>
  <div className="relative z-10">
    <h3 className="text-2xl font-semibold mb-4">Eligibility Criteria</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>
        The applicant should have passed the Class 12th examination from JKBOSE or CBSE-affiliated schools located in the UTs of J&K and Ladakh.
      </li>
      <li>
        The family income of the applicant should not exceed ₹8,00,000 per annum. 5000 fresh scholarships are available per annum.
      </li>
      <li>
        Applicants must be domiciled in the Union Territories of Jammu & Kashmir (J&K) and Ladakh.
      </li>
    </ul>
  </div>
</div>

            <div className="bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105 relative">
              <div className="absolute inset-0 bg-orange-300 opacity-20 rounded-lg"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">Announcement</h3>
                <p className="text-gray-700">Access a wealth of support resources, including guides and FAQs to help you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Login</h2>
    <p className="text-center text-lg text-black-700 mb-8">For the Academic Year 2024-25, please use the following options to access your respective accounts.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Student Login Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105 relative border border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-orange-100 opacity-60 rounded-lg"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-black">Student Login</h3>
          <p className="text-black mb-4">Access your student account to manage your scholarship applications and view your status. Stay up-to-date with your scholarship journey and track all your important updates.</p>
          <Link 
            to="/signin" 
            className="bg-yellow-200 text-black py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-300 transition ease-in-out duration-300"
          >
            Login
          </Link>
        </div>
      </div>
      
      {/* Officer Login Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 transform transition-transform hover:scale-105 relative border border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-orange-100 opacity-60 rounded-lg"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-black">Officer Login</h3>
          <p className="text-black mb-4">Access the officer's dashboard to review applications and manage scholarship details. Efficiently handle and oversee the scholarship process with ease.</p>
          <Link 
            to="/officerLogin" 
            className="bg-yellow-200 text-black py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-300 transition ease-in-out duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Scholarship Journey?</h2>
          <p className="text-lg mb-8">Join our platform today and start managing your scholarships with ease and efficiency.</p>
          <Link 
            to="/signup" 
            className="bg-white text-orange-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition ease-in-out duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
