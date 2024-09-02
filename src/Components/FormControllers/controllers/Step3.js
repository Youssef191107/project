// FormControllers/controllers/Step3.js
import React from 'react';

function Step3({ methods, previousStep, onSubmit }) {
  const summary = methods.getValues();

  return (
    <div>
      <h2 className="text-xl text-white font-bold mb-4">Step 3: Complete</h2>
      {summary && (
        <div className="mb-4 text-white">
          <p><strong>First Name:</strong> {summary.firstName}</p>
          <p><strong>Last Name:</strong> {summary.lastName}</p>
          <p><strong>Email:</strong> {summary.email}</p>
          <p><strong>Street Address:</strong> {summary.streetAddress}</p>
          <p><strong>City:</strong> {summary.city}</p>
          <p><strong>State:</strong> {summary.state}</p>
          <p><strong>Zip Code:</strong> {summary.zipCode}</p>
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previousStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
       
      </div>
    </div>
  );
}

export default Step3;
