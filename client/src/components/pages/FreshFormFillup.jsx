// FreshFormFillup.jsx
import React from 'react';

const FreshFormFillup = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 bg-gray-50 rounded-lg shadow-lg">
    <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Fresh Form Fillup</h1>
    <p className="text-lg text-gray-600 mb-6">
      Please fill out the form below to complete your application.
    </p>
    <form className="bg-white p-8 shadow-md rounded-lg">
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter First Name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Last Name"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Email address"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          rows="3"
          className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Your address"
          required
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="comments">
          Additional Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          rows="4"
          className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any additional information or requests"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
  );
};

export default FreshFormFillup;
