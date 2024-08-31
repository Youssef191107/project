// LabelInput.js
import React from 'react';

const LabelInput = ({ name, label, methods }) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-500">{label}</label>
      <input 
        {...methods.register(name)} 
        className="w-full bg-slate-500 px-3 py-2 border outline-none border-gray-300 rounded"
      />
      {methods.formState.errors[name] && (
        <p className="text-red-500 text-sm mt-1">{methods.formState.errors[name].message}</p>
      )}
    </div>
  );
};

export default LabelInput;