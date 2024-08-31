// import React, { useState } from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters long'),
//   lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters long'),
//   email: yup.string().required('Email is required').email('Entered value does not match email format'),
//   streetAddress: yup.string().required('Street address is required').min(5, 'Street address must be at least 5 characters long'),
//   city: yup.string().required('City is required').min(2, 'City must be at least 2 characters long'),
//   state: yup.string().required('State is required').min(2, 'State must be at least 2 characters long'),
//   zipCode: yup.string().required('Zip code is required').matches(/^\d{5}(-\d{4})?$/, 'Invalid zip code format'),
// });

// function LabelInput({ name, label, methods }) {
//   return (
//     <div className="mb-4 w-full">
//       <label className="block text-gray-500">{label}</label>
//       <input 
//         {...methods.register(name)} 
//         className="w-full bg-slate-500 px-3 py-2 border outline-none border-gray-300 rounded"
//       />
//       {methods.formState.errors[name] && (
//         <p className="text-red-500 text-sm mt-1">{methods.formState.errors[name].message}</p>
//       )}
//     </div>
//   );
// }

// function form() {
//   const [step, setStep] = useState(1);
//   const methods = useForm({
//     resolver: yupResolver(schema),
//     mode: 'onTouched',
//   });
  
//   const { handleSubmit, getValues } = methods;

//   const nextStep = () => setStep(step + 1);
//   const previousStep = () => setStep(step - 1);
  
//   const onSubmit = (data) => {
//     console.log('Final Data:', data);
//     // Handle final submission here
//   };

//   return (
//     <div className='w-full h-screen  bg-slate-950 flex justify-center items-center'>
//       <div className="w-3/4 p-8 h-11/12 border-solid rounded-lg flex flex-col gap-12 bg-slate-800">
//         <FormProvider {...methods}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {step === 1 && (
//               <StepContent
//                 title="Step 1: Personal Information"
//                 inputs={[
//                   { name: 'firstName', label: 'First Name' },
//                   { name: 'lastName', label: 'Last Name' },
//                   { name: 'email', label: 'Email' },
//                 ]}
//                 methods={methods}
//                 nextStep={nextStep}
//               />
//             )}
//             {step === 2 && (
//               <StepContent
//                 title="Step 2: Address Information"
//                 inputs={[
//                   { name: 'streetAddress', label: 'Street Address' },
//                   { name: 'city', label: 'City' },
//                   { name: 'state', label: 'State' },
//                   { name: 'zipCode', label: 'Zip Code' },
//                 ]}
//                 methods={methods}
//                 previousStep={previousStep}
//                 nextStep={nextStep}
//               />
//             )}
//             {step === 3 && (
//               <StepContent
//                 title="Step 3: Complete"
//                 summary={getValues()}
//                 methods={methods}
//                 previousStep={previousStep}
//               />
//             )}
//           </form>
//         </FormProvider>
//       </div>
//     </div>
//   );
// }

// function StepContent({ title, inputs, summary, methods, nextStep, previousStep }) {
//   return (
//     <div className='w-full'>
//       <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
//       {inputs && inputs.map((input, index) => (
//         <LabelInput key={index} name={input.name} label={input.label} methods={methods} />
//       ))}
//       {summary && (
//         <div className="mb-4 text-white">
//           <p><strong>First Name:</strong> {summary.firstName}</p>
//           <p><strong>Last Name:</strong> {summary.lastName}</p>
//           <p><strong>Email:</strong> {summary.email}</p>
//           <p><strong>Street Address:</strong> {summary.streetAddress}</p>
//           <p><strong>City:</strong> {summary.city}</p>
//           <p><strong>State:</strong> {summary.state}</p>
//           <p><strong>Zip Code:</strong> {summary.zipCode}</p>
//         </div>
//       )}
//       <div className="flex justify-between">
//         {previousStep && (
//           <button 
//             type="button" 
//             onClick={previousStep}
//             className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//           >
//             Previous
//           </button>
//         )}
//         {nextStep ? (
//           <button 
//             type="button" 
//             onClick={nextStep}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Next
//           </button>
//         ) : (
//           <button 
//             type="submit"
//             className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//           >
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default form;

// form.js





// import React from 'react';
// import StepContent from './StepContent';

// const form = ({ title, inputs, summary, methods, nextStep, previousStep }) => {
//   return (
//     <StepContent
//       title={title}
//       inputs={inputs}
//       summary={summary}
//       methods={methods}
//       nextStep={nextStep}
//       previousStep={previousStep}
//     />
//   );
// };

// export default form;

import React, { useState } from 'react';
import StepContent from './StepContent'; // Adjust the path as necessary
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters long'),
    lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters long'),
    email: yup.string().required('Email is required').email('Entered value does not match email format'),
    streetAddress: yup.string().required('Street address is required').min(5, 'Street address must be at least 5 characters long'),
    city: yup.string().required('City is required').min(2, 'City must be at least 2 characters long'),
    state: yup.string().required('State is required').min(2, 'State must be at least 2 characters long'),
    zipCode: yup.string().required('Zip code is required').matches(/^\d{5}(-\d{4})?$/, 'Invalid zip code format'),
  });

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const titles = [
    "Step 1: Personal Information",
    "Step 2: Address Information",
    "Step 3: Complete"
  ];  const inputs = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'email', label: 'Email' },
    { name: 'streetAddress', label: 'Street Address' },
    { name: 'city', label: 'City' },
    { name: 'state', label: 'State' },
    { name: 'zipCode', label: 'Zip Code' },
];
  const summary = "Summary text";
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const { handleSubmit, getValues } = methods;
  const onSubmit = (data) => {
    console.log('Final Data:', data);
    // Handle final submission here
  };
  return (
    <div className='w-full h-screen bg-slate-950 flex justify-center items-center'>
    <div className="w-3/4 p-8 h-11/12 border-solid rounded-lg flex flex-col gap-12 bg-slate-800">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <StepContent
              title={titles[0]}
              inputs={inputs.slice(0, 3)}
              methods={methods}
              nextStep={nextStep}
            />
          )}
          {currentStep === 2 && (
            <StepContent
              title={titles[1]}
              inputs={inputs.slice(3)}
              methods={methods}
              previousStep={previousStep}
              nextStep={nextStep}
            />
          )}
          {currentStep === 3 && (
            <StepContent
              title={titles[2]}
              summary={getValues()}
              methods={methods}
              previousStep={previousStep}
            />
          )}
        </form>
      </FormProvider>
    </div>
  </div>
  );
};

export default Form;