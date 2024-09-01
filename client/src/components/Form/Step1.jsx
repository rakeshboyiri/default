import React from "react";
import { useForm } from "react-hook-form";

function Step1({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="mt-8 max-w-3xl mx-auto px-4 py-6 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Step-1</h1>
        <p className="text-lg text-gray-600 mb-6">
          Please fill out the form below to complete your application.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 shadow-md rounded-lg"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">Name is required.</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email address"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">Email is required.</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                Phone number is required.
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="fatherName"
              >
                Father's Name
              </label>
              <input
                type="text"
                id="fatherName"
                {...register("fatherName", { required: true })}
                className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Father's Name"
              />
              {errors.fatherName && (
                <p className="text-red-600 text-sm mt-1">
                  Father's name is required.
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="motherName"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="motherName"
                {...register("motherName", { required: true })}
                className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Mother's Name"
              />
              {errors.motherName && (
                <p className="text-red-600 text-sm mt-1">
                  Mother's name is required.
                </p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="parentPhone"
            >
              Parent's Phone Number
            </label>
            <input
              type="tel"
              id="parentPhone"
              {...register("parentPhone", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Parent's Phone Number"
            />
            {errors.parentPhone && (
              <p className="text-red-600 text-sm mt-1">
                Parent's phone number is required.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="parentAddress"
            >
              Parent's Address
            </label>
            <textarea
              id="parentAddress"
              {...register("parentAddress", { required: true })}
              rows="3"
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Parent's Address"
            ></textarea>
            {errors.parentAddress && (
              <p className="text-red-600 text-sm mt-1">
                Parent's address is required.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="profilePhoto"
            >
              Profile Photo Upload
            </label>
            <input
              type="file"
              id="profilePhoto"
              {...register("profilePhoto", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.profilePhoto && (
              <p className="text-red-600 text-sm mt-1">
                Profile photo upload is required.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="comments"
            >
              Additional Comments
            </label>
            <textarea
              id="comments"
              {...register("comments")}
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
    </>
  );
}

export default Step1;
