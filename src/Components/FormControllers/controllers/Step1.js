// FormControllers/controllers/Step1.js
import React from 'react';
import InputController from './InputController';

function Step1({ methods, nextStep }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Step 1: Personal Information</h2>
      <InputController name="firstName" label="First Name" methods={methods} />
      <InputController name="lastName" label="Last Name" methods={methods} />
      <InputController name="email" label="Email" methods={methods} />
      <div className="flex justify-end mt-4">
        <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
      </div>
    </div>
  );
}

export default Step1;