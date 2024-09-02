// PreviousButton.js
import React from 'react';
import Button from './Button';

const PreviousButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
      Previous
    </Button>
  );
};

export default PreviousButton;
