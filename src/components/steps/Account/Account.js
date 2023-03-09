import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const Account = ({ step, setStep }) => {
  const { formData, setFormValues } = useFormDataContext();
  console.log(formData);

  const { saveDataToLocal, saveStepToLocal } = utils;

  const {
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
    register,
  } = useForm({
    mode: 'all',
    defaultValues: {
      Email: formData?.Email,
      UserName: formData?.UserName,
      Password: formData?.Password,
      ConfirmPassword: formData?.ConfirmPassword,
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
      <div className='row d-flex justify-content-center mt-5'>
        {/* for taking email  */}
        <div className='col form-group'>
          <label
            htmlFor='Email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email: *
          </label>
          <input
            type='email'
            placeholder='Email Id'
            className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='Email'
            {...register('Email', { required: 'email is required' })}
          />
        </div>
        {/* for username  */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='UserName'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            User Name: *
          </label>
          <input
            type='text'
            className='form-control form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='UserName'
            name='UserName'
            autocomplete='off'
            {...register('UserName', { required: 'User Name is required' })}
          />
        </div>
        {/* for password  */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='Password'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password : *
          </label>
          <input
            id='password'
            type='password'
            placeholder='Password'
            className='form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='Password'
            autocomplete='off'
            {...register('Password', {
              required: 'Password is required',
              minLength: 5,
            })}
          />
          {errors?.Password?.type === 'required' && (
            <p className='text-semibold text-small text-red-600'>
              This field is required
            </p>
          )}
          {errors?.Password?.type === 'minLength' && (
            <p className='text-semibold text-small text-red-600'>
              password cannot less than 5 characters
            </p>
          )}
        </div>
        {/* for confirm password */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='ConfirmPassword'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Confirm Password : *
          </label>
          <input
            type='password'
            placeholder='Confirm Password'
            className='form-control form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='ConfirmPassword'
            {...register('ConfirmPassword', {
              required: true,
            })}
          />
          {watch('ConfirmPassword') !== watch('Password') &&
          getValues('ConfirmPassword') ? (
            <p className='text-semibold text-small text-red-600'>
              Password did not match
            </p>
          ) : null}
        </div>
      </div>
      {watch('ConfirmPassword') !== watch('Password') ? (
        <div className='pointer-events-none'>
          <StepNavigation
            step={step}
            setStep={setStep}
            error={errors.Name ? 'Name field is required' : false}
          ></StepNavigation>
        </div>
      ) : (
        <div>
          <StepNavigation
            step={step}
            setStep={setStep}
            error={errors.Name ? 'Name field is required' : false}
          ></StepNavigation>
        </div>
      )}
    </form>
  );
};

export default Account;
