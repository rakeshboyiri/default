import React from "react";
import { Link, Outlet } from "react-router-dom";

const FreshFormFillup = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-center gap-6 p-4 bg-gray-100 border-b border-gray-300">
        <Link to="/saf" className="text-blue-500 font-bold hover:text-blue-700">
          Step 1
        </Link>
        <Link to="step2" className="text-blue-500 font-bold hover:text-blue-700">
          Step 2
        </Link>
        <Link to="step3" className="text-blue-500 font-bold hover:text-blue-700">
          Step 3
        </Link>
      </nav>

      {/* This will render the matched child route component */}
      <Outlet />
    </>
  );
};

export default FreshFormFillup;
