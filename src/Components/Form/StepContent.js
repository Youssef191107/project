import React from 'react';
import Title from './Title';
import InputList from './InputList';
import Summary from './Summary';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const StepContent = ({ title, inputs, summary, methods, nextStep, previousStep }) => {
    console.log('Inputs:', inputs);
    console.log('Summary:', summary);
  return (
    <div className='w-full'>
      <Title text={title} />
      <InputList inputs={inputs} methods={methods} />
      {summary && <Summary summary={summary} />}
      <div className="flex justify-between mt-4">
        <PreviousButton onClick={previousStep} />
        <NextButton onClick={nextStep} />
      </div>
    </div>
  );
};

export default StepContent;