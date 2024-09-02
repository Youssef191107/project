// ButtonContainer.js
import React from 'react';
import Button from './NextButton';

const ButtonContainer = ({ isLastStep, nextStep }) => {
  return (
    <div className="flex justify-end mt-4">
      {isLastStep ? (
        <Button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Submit
        </Button>
      ) : (
        <Button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default ButtonContainer;