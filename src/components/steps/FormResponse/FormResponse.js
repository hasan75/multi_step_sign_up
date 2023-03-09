import React from 'react';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import StepNavigation from '../../StepNavigation/StepNavigation';

const FormResponse = ({ step, setStep }) => {
  const { formData } = useFormDataContext();
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <h2 className='text-green-700 uppercase text-3xl font-bold pt-8 mt-6'>
          Success !{' '}
        </h2>
        <div className='font-semibold my-4  text-center flex justify-center pt-4'>
          <h2 className='w-24'>
            <span className='text-green-600'>{formData?.UserName}, </span>
            You Have Successfully Signed Up
          </h2>
        </div>
      </div>
      <div className='w-full'>
        <StepNavigation step={step} setStep={setStep}></StepNavigation>
      </div>
    </div>
  );
};

export default FormResponse;
