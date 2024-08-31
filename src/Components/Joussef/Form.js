import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

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
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const previousStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const onSubmit = (data) => {
    console.log('Final Data:', data);
    // Handle final submission here
  };

  return (
    <div className='w-full h-screen bg-slate-950 flex justify-center items-center'>
      <div className="w-3/4 p-8 h-11/12 border-solid rounded-lg flex flex-col gap-12 bg-slate-800">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {step === 1 && <Step1 methods={methods} nextStep={nextStep} />}
            {step === 2 && <Step2 methods={methods} previousStep={previousStep} nextStep={nextStep} />}
            {step === 3 && <Step3 methods={methods} previousStep={previousStep} onSubmit={onSubmit} />}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Form;