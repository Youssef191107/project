// NextButton.js
import React from 'react';
import Button from './Button';

const NextButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Next
    </Button>
  );
};

export default NextButton;