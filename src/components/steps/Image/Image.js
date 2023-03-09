import React from 'react';
import StepNavigation from '../../StepNavigation/StepNavigation';

const Image = ({ step, setStep }) => {
  return (
    <div>
      <h1>Image Js</h1>
      <StepNavigation step={step} setStep={setStep}></StepNavigation>
    </div>
  );
};

export default Image;
