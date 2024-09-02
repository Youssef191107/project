//form.js
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Step1 from './Components/controllers/Step1';
import Step2 from './Components/controllers/Step2';
import Step3 from './Components/controllers/Step3';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters long'),
  lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters long'),
  email: yup.string().required('Email is required').email('Entered value does not match email format'),
  streetAddress: yup.string().required('Street address is required').min(5, 'Street address must be at least 5 characters long'),
  city: yup.string().required('City is required').min(2, 'City must be at least 2 characters long'),
  state: yup.string().required('State is required').min(2, 'State must be at least 2 characters long'),
  zipCode: yup.string().required('Zip code is required').matches(/^\d{5}(-\d{4})?$/, 'Invalid zip code format'),
});

function Form() {
  const [step, setStep] = useState(0);
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const steps = [
    { component: Step1, fields: ['firstName', 'lastName', 'email'] },
    { component: Step2, fields: ['streetAddress', 'city', 'state', 'zipCode'] },
    { component: Step3, fields: [] },
  ];

  const handleNext = async () => {
    const currentStepFields = steps[step].fields;
    const isValid = await methods.trigger(currentStepFields);
    if (isValid) {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        methods.handleSubmit((data) => console.log('Final Data:', data))();
      }
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className='w-full h-screen bg-slate-950 flex justify-center items-center'>
      <div className="w-3/4 p-8 h-11/12 border-solid rounded-lg flex flex-col gap-12 bg-slate-800">
        <FormProvider {...methods}>
          <form>
            {steps.map((stepComponent, index) => {
              const StepComponent = stepComponent.component;
              return index === step && <StepComponent key={index} methods={methods} />;
            })}
            <div className="flex justify-between mt-4">
              {step > 0 && (
                <button type="button" onClick={handlePrevious} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Previous</button>
              )}
              {step < steps.length - 1 && (
                <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  {step === steps.length - 2 ? 'Submit' : 'Next'}
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Form;