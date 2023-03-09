import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormDataContext } from '../../../hooks/useFormDataContext';
import utils from '../../../utils/utils';
import StepNavigation from '../../StepNavigation/StepNavigation';

const Account = ({ step, setStep }) => {
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
      <div className='row d-flex justify-content-center mt-5'>
        {/* for taking first name input  */}
        <div className='col form-group'>
          <label
            htmlFor='email'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Email: *
          </label>
          <input
            type='email'
            placeholder='enter email'
            className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='email'
            {...register('email', { required: 'email is required' })}
          />
        </div>
        {/* for last name input  */}
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
            name='UserName'
            {...register('UserName', { required: 'User Name is required' })}
          />
        </div>
        {/* for contact  */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='Password'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Password : *
          </label>
          <input
            type='password'
            placeholder='enter password'
            className='form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='Password'
            {...register('Password', { required: 'Password is required' })}
          />
        </div>
        {/* for alternative contact  */}
        <div className='col form-group mt-4'>
          <label
            htmlFor='confirmPassword'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Confirm Password : *
          </label>
          <input
            type='text'
            className='form-control form-control shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            name='confirmPassword'
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
            })}
          />
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <StepNavigation
            step={step}
            setStep={setStep}
            error={errors.Name ? 'Name field is required' : false}
          ></StepNavigation>
        </div>
      </div>
    </form>
  );
};

export default Account;
