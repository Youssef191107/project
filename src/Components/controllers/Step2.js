import React from 'react';
import InputController from './InputController';

function Step2({ methods }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Step 2: Address Information</h2>
      <InputController name="streetAddress" label="Street Address" methods={methods} />
      <InputController name="city" label="City" methods={methods} />
      <InputController name="state" label="State" methods={methods} />
      <InputController name="zipCode" label="Zip Code" methods={methods} />
    </div>
  );
}

export default Step2;