import React from 'react';
import LabelInput from './LabelInput';

function Step2({ methods, previousStep, nextStep }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: Address Information</h2>
      <LabelInput name="streetAddress" label="Street Address" methods={methods} />
      <LabelInput name="city" label="City" methods={methods} />
      <LabelInput name="state" label="State" methods={methods} />
      <LabelInput name="zipCode" label="Zip Code" methods={methods} />
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previousStep} className="btn">Previous</button>
        <button type="button" onClick={nextStep} className="btn">Next</button>
      </div>
    </div>
  );
}

export default Step2;