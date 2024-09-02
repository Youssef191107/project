// FormControllers/Form.js

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Step1 from './controllers/Step1';
import Step2 from './controllers/Step2';
import Step3 from './controllers/Step3';

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
    { component: Step1, props: { nextStep: () => setStep(1) } },
    { component: Step2, props: { previousStep: () => setStep(0), nextStep: () => setStep(2) } },
    { component: Step3, props: { previousStep: () => setStep(1), onSubmit: methods.handleSubmit((data) => console.log('Final Data:', data)) } },
  ];

  return (
    <div className='w-full h-screen bg-slate-950 flex justify-center items-center'>
      <div className="w-3/4 p-8 h-11/12 border-solid rounded-lg flex flex-col gap-12 bg-slate-800">
        <FormProvider {...methods}>
          <form>
            {steps.map((stepComponent, index) => {
              const StepComponent = stepComponent.component;
              return index === step && <StepComponent key={index} {...stepComponent.props} methods={methods} />;
            })}
            
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Form;
