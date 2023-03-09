import React, { useEffect, useRef, useState } from 'react';
import { useFormDataContext } from '../../hooks/useFormDataContext';

const StepAnimation = () => {
  const { step, setStep } = useFormDataContext();

  const steps = [
    { name: 'Account', icon: 'lock-open' },
    { name: 'Personal', icon: 'person' },
    { name: 'Image', icon: 'photo_camera' },
    { name: 'Finish', icon: 'done' },
  ];

  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((stepp, index) =>
      Object.assign(
        {},
        {
          description: stepp.name,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(step - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, step]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'w-full flex items-center'
            : 'flex items-center'
        }
      >
        <div className='relative flex flex-col items-center text-teal-600'>
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected
                ? 'bg-green-600 text-white font-bold border border-green-600 '
                : ''
            }`}
          >
            {step.completed ? (
              <span className='text-white font-bold text-xl material-icons-sharp'>
                {step?.icon}
              </span>
            ) : (
              <span className='text-white font-bold text-xl material-icons-sharp'>
                {step?.icon}
              </span>
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? 'border-green-600' : 'border-gray-300 '
          }  `}
        ></div>
      </div>
    );
  });

  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
      {stepsDisplay}
    </div>
  );
};

export default StepAnimation;
