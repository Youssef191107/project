import React from 'react';
import LabelInput from './LabelInput';

function Step1({ methods, nextStep }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1: Personal Information</h2>
      <LabelInput name="firstName" label="First Name" methods={methods} />
      <LabelInput name="lastName" label="Last Name" methods={methods} />
      <LabelInput name="email" label="Email" methods={methods} />
      <div className="flex justify-end mt-4">
        <button type="button" onClick={nextStep} className="btn">Next</button>
      </div>
    </div>
  );
}

export default Step1;