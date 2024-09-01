import React,{useState} from 'react';
import {useForm} from "react-hook-form"

function Step3({}) {
    const { register, handleSubmit, setValue } = useForm();
    const [document, setDocument] = useState(null);
  
    const onSubmit = async (data) => {
      try {
        // Make an API call to your backend to handle DigiLocker authentication and document fetching
        const response = await axios.post('/api/fetch-documents', data);
        setDocument(response.data);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Fetch Document from DigiLocker</h1>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Document Type Input */}
            <div className="mb-6">
              <label htmlFor="documentType" className="block text-gray-700 text-sm font-medium mb-2">
                Document Type
              </label>
              <select
                id="documentType"
                {...register('documentType', { required: true })}
                className="block w-full bg-gray-200 border border-gray-300 rounded-md p-2"
              >
                <option value="10thMarksheets">10th Marksheets</option>
                <option value="12thMarksheets">12th Marksheets</option>
                <option value="aadharCard">Aadhar Card</option>
                <option value="incomeCertificate">Income Certificate</option>
                <option value="domicile">Domicile</option>
              </select>
            </div>
  
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300"
              >
                Fetch Document
              </button>
            </div>
          </form>
  
          {/* Display Document */}
          {document && (
            <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Document Details</h2>
              <pre className="text-gray-800">{JSON.stringify(document, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    );
}

export default Step3;