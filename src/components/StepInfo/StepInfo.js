import React from 'react';
import { useFormDataContext } from '../../hooks/useFormDataContext';

const StepInfo = () => {
  const { step } = useFormDataContext();
  return (
    <div className='flex justify-between align-center text-xl font-semibold'>
      <p>
        {step === 1
          ? 'Account Information'
          : step === 2
          ? 'Personal Information'
          : step === 3
          ? 'Image Upload'
          : 'Finish'}
      </p>
      <p>Step {step} - 4</p>
    </div>
  );
};

export default StepInfo;
