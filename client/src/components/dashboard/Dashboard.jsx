import React from "react";
import { User, Settings, CreditCard, HelpCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = ({}) => {
  const { currUser } = useSelector((state) => state.user);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <Link
            className="flex items-center py-2 px-4 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
            href="#"
          >
            <User className="mr-3" /> Status Bar
          </Link>
          <Link
            className="flex items-center mt-2 py-2 px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200"
            href="#"
          >
            <Settings className="mr-3" /> Eligibility
          </Link>
          <Link
            className="flex items-center mt-2 py-2 px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200"
            href="#"
          >
            <CreditCard className="mr-3" /> Continue to where left
          </Link>
          <Link
            className="flex items-center mt-2 py-2 px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200"
            to="/saf"
          >
            <HelpCircle className="mr-3" /> Fresh Form Fillup
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome,{currUser.name}!
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
              <h2 className="text-2xl font-semibold mb-4">
                Your Account Overview
              </h2>
              <p>
                <strong>Email:</strong> {currUser.email}
              </p>
              <p>
                <strong>Username:</strong> {currUser.userName}
              </p>
              <p>
                <strong>Phone:</strong> {currUser.phone}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
