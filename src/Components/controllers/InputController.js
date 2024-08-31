import React from 'react';
import { useFormContext } from 'react-hook-form';

function InputController({ name, label }) {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block text-white mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        {...register(name)}
        className={`w-full p-2 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded`}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
}

export default InputController;