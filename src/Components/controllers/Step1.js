import React from 'react';
import InputController from './InputController';

function Step1({ methods }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Step 1: Personal Information</h2>
      <InputController name="firstName" label="First Name" methods={methods} />
      <InputController name="lastName" label="Last Name" methods={methods} />
      <InputController name="email" label="Email" methods={methods} />
    </div>
  );
}

export default Step1;