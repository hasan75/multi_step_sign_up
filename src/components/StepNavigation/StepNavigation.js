import React from 'react';
import { useFormDataContext } from '../../hooks/useFormDataContext';
import utils from '../../utils/utils';

const StepNavigation = ({ step, setStep, error, response }) => {
  const { res, setResFun } = useFormDataContext();
  const { saveStepToLocal, saveResToLocal } = utils;

  //for back button functionality
  const previousStepFrom = (step, setStep) => {
    console.log(step, 'on last page');
    if (step === 4) {
      setStep(1);
      saveStepToLocal(1);
      setResFun({});
      localStorage.removeItem('res');
    } else {
      setStep((currentStep) => currentStep - 1);
      saveStepToLocal((step = step - 1));
    }
  };

  return (
    <div className='mt-6'>
      {/* for showing the validation errors  */}
      {error ? (
        <h5 className='flex align-center justify-center text-red-500 py-3'>
          <span className='material-icons-sharp me-2'>error</span>{' '}
          <span>{error}</span>
        </h5>
      ) : (
        ''
      )}

      {/* back and next navigator buttons  */}

      <div
        className={`${response?.status === 'success' ? 'hidden' : ' '} ${
          step === 1
            ? 'flex flex-col justify-center align-center'
            : 'flex flex-col justify-center align-center'
        }`}
      >
        {step < 4 && (
          <button
            type='submit'
            className='mb-6 block w-full bg-gray-100 hover:bg-green-500 text-gray-700 font-semibold hover:text-white py-3 px-4  hover:border-transparent rounded'
          >
            {step === 3 ? 'Submit' : 'Next'}
          </button>
        )}
        {step > 1 && (
          <button
            type='button'
            onClick={() => previousStepFrom(step, setStep)}
            className='block w-full bg-gray-100 hover:bg-gray-700 text-gray-700 font-semibold hover:text-white py-3 px-4  hover:border-transparent rounded'
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default StepNavigation;
