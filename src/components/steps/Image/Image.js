import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const Image = ({ step, setStep }) => {
  //
  const { formData, setFormValues } = useFormDataContext();
  // console.log(formData);

  const { saveDataToLocal, saveStepToLocal } = utils;

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: 'all',
    defaultValues: { Name: formData?.Name, Gender: formData?.Gender },
  });

  const onSubmit = (values) => {
    setFormValues(values);

    // save values to localStorage
    saveDataToLocal({ ...formData, ...values });

    setStep((currentStep) => currentStep + 1);
    saveStepToLocal((step = step + 1));
  };
  return (
    <form
      className='d-flex flex-column justify-content-between w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-between align-center'>
        <p>Image Upload:</p>
        <p>Step {step} - 4</p>
      </div>
      <div className='row'>
        <div className='col form-group my-3'>
          <label
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            for='photo_input'
          >
            Upload Your Photo:
          </label>
          <input
            class='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2'
            id='photo_input'
            type='file'
          ></input>
        </div>
        <div className='col form-group mt-6 mb-4'>
          <label
            class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            for='sign_input'
          >
            Upload Signature Photo:
          </label>
          <input
            class='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2'
            id='sign_input'
            type='file'
          ></input>
        </div>
      </div>
      <StepNavigation step={step} setStep={setStep}></StepNavigation>
    </form>
  );
};

export default Image;
