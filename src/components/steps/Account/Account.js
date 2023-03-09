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
    <div>
      <form
        className='d-flex flex-column justify-content-between w-100'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='row d-flex justify-content-center mt-5'>
          {/* for taking first name input  */}
          <div className='col form-group'>
            <label htmlFor='FirstName' className='fw-bold mb-2'>
              First Name: *
            </label>
            <input
              type='text'
              className='form-control'
              name='FirstName'
              {...register('FirstName', { required: 'First Name is required' })}
            />
          </div>
          {/* for last name input  */}
          <div className='col form-group mt-4'>
            <label htmlFor='Last Name' className='mb-2 fw-bold'>
              Last Name
            </label>
            <input
              type='text'
              className='form-control'
              name='LastName'
              {...register('LastName', { required: 'Last Name is required' })}
            />
          </div>
          {/* for contact  */}
          <div className='col form-group mt-4'>
            <label htmlFor='Contact' className='mb-2 fw-bold'>
              Contact No. : *
            </label>
            <input
              type='text'
              className='form-control'
              name='Contact'
              {...register('Contact', { required: 'Contact is required' })}
            />
          </div>
          {/* for alternative contact  */}
          <div className='col form-group mt-4'>
            <label htmlFor='alternativeNum' className='mb-2 fw-bold'>
              Alternative Contact No : *
            </label>
            <input
              type='text'
              className='form-control'
              name='alternativeNum'
              {...register('alternativeNum', {
                required: 'Alternative Number is required',
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
      <StepNavigation step={step} setStep={setStep}></StepNavigation>
    </div>
  );
};

export default Account;
