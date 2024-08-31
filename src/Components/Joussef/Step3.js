import React from 'react';

function Step3({ methods, previousStep, onSubmit }) {
  const summary = methods.getValues();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Complete</h2>
      <div>
        <h3 className="text-lg font-bold mb-2">Summary</h3>
        <pre>{JSON.stringify(summary, null, 2)}</pre>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" onClick={previousStep} className="btn">Previous</button>
        <button type="submit" className="btn">Submit</button>
      </div>
    </div>
  );
}

export default Step3;