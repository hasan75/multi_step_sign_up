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
          <label htmlFor='email' className='fw-bold mb-2'>
            Email: *
          </label>
          <input
            type='email'
            className='form-control'
            name='email'
            {...register('email', { required: 'email is required' })}
          />
        </div>
        {/* for last name input  */}
        <div className='col form-group mt-4'>
          <label htmlFor='UserName' className='mb-2 fw-bold'>
            User Name: *
          </label>
          <input
            type='text'
            className='form-control'
            name='UserName'
            {...register('UserName', { required: 'User Name is required' })}
          />
        </div>
        {/* for contact  */}
        <div className='col form-group mt-4'>
          <label htmlFor='Password' className='mb-2 fw-bold'>
            Password : *
          </label>
          <input
            type='password'
            className='form-control'
            name='Password'
            {...register('Password', { required: 'Password is required' })}
          />
        </div>
        {/* for alternative contact  */}
        <div className='col form-group mt-4'>
          <label htmlFor='confirmPassword' className='mb-2 fw-bold'>
            Confirm Password : *
          </label>
          <input
            type='text'
            className='form-control'
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
