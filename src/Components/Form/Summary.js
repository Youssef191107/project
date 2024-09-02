// Summary.js
import React from 'react';

const Summary = ({ summary }) => {
  return (
    <div className="mb-4 text-white">
      <p><strong>First Name:</strong> {summary.firstName}</p>
      <p><strong>Last Name:</strong> {summary.lastName}</p>
      <p><strong>Email:</strong> {summary.email}</p>
      <p><strong>Street Address:</strong> {summary.streetAddress}</p>
      <p><strong>City:</strong> {summary.city}</p>
      <p><strong>State:</strong> {summary.state}</p>
      <p><strong>Zip Code:</strong> {summary.zipCode}</p>
    </div>
  );
};

export default Summary;