import React, { useEffect, useRef, useState } from 'react';
import FormContent from '../../components/FormContent/FormContent';
import { useFormDataContext } from '../../hooks/useFormDataContext';
import utils from '../../utils/utils';

const SignUpForm = () => {
  // context api
  const { formData, setFormValues, step, setStep, setFirstRender } =
    useFormDataContext();

  // const [step, setStep] = useState(1);

  // for step change
  const [stepChange, setStepChange] = useState(false);

  const changeStepChange = () => {
    setStepChange(true);
  };

  useEffect(() => {
    changeStepChange();
  }, [step]);

  // utilities
  const { formContentStep, decrypt } = utils;

  const currentFormContent = formContentStep(step, setStep);

  // from localStorage, save data
  useEffect(() => {
    if (localStorage.getItem('formData')) {
      // console.log(localStorage.getItem('formData'));

      const dataFromLocalStorage = JSON.parse(
        decrypt(localStorage.getItem('formData'))
      );

      if (dataFromLocalStorage) {
        console.log(dataFromLocalStorage, 'decrypted');
        setFormValues(dataFromLocalStorage);
      }
    }

    //save step to  local storage
    if (localStorage.getItem('step')) {
      const stepFromLocal = JSON.parse(decrypt(localStorage.getItem('step')));

      if (stepFromLocal) {
        setStep(stepFromLocal);
      }
    }
  }, []);

  return (
    <div>
      <FormContent>{currentFormContent}</FormContent>
    </div>
  );
};

export default SignUpForm;
