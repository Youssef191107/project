// FormControllers/controllers/InputController.js
import React from 'react';
import FieldInput from '../../helpers/FieldInput';
import handleErrorMsg from '../helpers/handleErrorMsg';

function InputController({ name, label, methods }) {
  return (
    
      <FieldInput name={name} methods={methods} label={label} />
     
    
  );
}

export default InputController;