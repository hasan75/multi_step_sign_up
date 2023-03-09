import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const Personal = ({ step, setStep }) => {
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
    defaultValues: {
      FirstName: formData?.FirstName,
      LastName: formData?.LastName,
      Contact: formData?.Contact,
      AlternativeNum: formData?.AlternativeNum,
    },
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
      <div className='row'>
        {/* for taking first name input  */}
        <div className='col form-group'>
          <label
            htmlFor='FirstName'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            First Name: *
          </label>
          <input
            type='text'
            placeholder='First Name'
            className='form-control form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='FirstName'
            {...register('FirstName', { required: 'First Name is required' })}
          />
        </div>
        {/* for last name input  */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='Last Name'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Last Name
          </label>
          <input
            type='text'
            placeholder='Last Name'
            className='form-control form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='LastName'
            {...register('LastName', { required: 'Last Name is required' })}
          />
        </div>
        {/* for contact  */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='Contact'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Contact No. : *
          </label>
          <input
            placeholder='Contact No.'
            type='text'
            className='form-control form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='Contact'
            {...register('Contact', { required: 'Contact is required' })}
          />
        </div>
        {/* for alternative contact  */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='AlternativeNum'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Alternative Contact No : *
          </label>
          <input
            type='text'
            placeholder='Alternative Contact No.'
            className='form-control form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='AlternativeNum'
            {...register('AlternativeNum', {
              required: 'Alternative Number is required',
            })}
          />
        </div>
      </div>
      <StepNavigation step={step} setStep={setStep}></StepNavigation>
    </form>
  );
};

export default Personal;
