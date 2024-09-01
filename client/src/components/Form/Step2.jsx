import React from 'react';
import { useForm } from 'react-hook-form';

const Step2 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Educational Information</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Certificates Upload Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Upload Certificates</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">10th Marksheets:</label>
                <input 
                  type="file" 
                  {...register('10thMarksheets')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">12th Marksheets:</label>
                <input 
                  type="file" 
                  {...register('12thMarksheets')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">Aadhar Card:</label>
                <input 
                  type="file" 
                  {...register('aadharCard')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">Income Certificate:</label>
                <input 
                  type="file" 
                  {...register('incomeCertificate')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">Domicile:</label>
                <input 
                  type="file" 
                  {...register('domicile')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Personal Status Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Status</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="handicapped" 
                  {...register('handicapped')}
                  className="mr-2"
                />
                <label htmlFor="handicapped" className="text-gray-600">Physically Handicapped</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="military" 
                  {...register('military')}
                  className="mr-2"
                />
                <label htmlFor="military" className="text-gray-600">Military Person</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="ncc" 
                  {...register('ncc')}
                  className="mr-2"
                />
                <label htmlFor="ncc" className="text-gray-600">NCC Participant</label>
              </div>
            </div>
          </div>

          {/* Schooling Information Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Schooling Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">School Name:</label>
                <input 
                  type="text" 
                  placeholder="Enter School Name" 
                  {...register('schoolName')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">Year of Passing:</label>
                <input 
                  type="text" 
                  placeholder="Enter Year of Passing" 
                  {...register('yearOfPassing')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="w-1/4 text-gray-600">Percentage:</label>
                <input 
                  type="text" 
                  placeholder="Enter Percentage" 
                  {...register('percentage')}
                  className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;