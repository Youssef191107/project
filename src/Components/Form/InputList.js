// InputList.js
import React from 'react';
import LabelInput from './LabelInput';

const InputList = ({ inputs, methods }) => {
    return (
      <div className="space-y-4"> {/* Add Tailwind CSS class for spacing between inputs */}
        {inputs && inputs.map((input, index) => (
          <LabelInput 
            key={index} 
            name={input.name} 
            label={input.label} 
            methods={methods} 
            className="p-2 border border-black rounded-md" // Tailwind CSS classes for LabelInput with black border
          />
        ))}
      </div>
    );
  };
  

export default InputList;