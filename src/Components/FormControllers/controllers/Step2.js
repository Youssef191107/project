// FormControllers/controllers/Step2.js
import React from 'react';
import InputController from './InputController';

function Step2({ methods, previousStep, nextStep }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Step 2: Address Information</h2>
      <InputController name="streetAddress" label="Street Address" methods={methods} />
      <InputController name="city" label="City" methods={methods} />
      <InputController name="state" label="State" methods={methods} />
      <InputController name="zipCode" label="Zip Code" methods={methods} />
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previousStep} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Submit</button>
      </div>
    </div>
  );
}

export default Step2;
