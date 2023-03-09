import React, { useEffect, useRef, useState } from 'react';
import { useFormDataContext } from '../../hooks/useFormDataContext';

import progressStyles from './StepAnimation.module.css';

const StepAnimation = () => {
  const { step, setStep } = useFormDataContext();

  const steps = [
    { name: 'Account', icon: 'lock_open' },
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

  const [percentage, setPercentage] = useState(25);

  useEffect(() => {
    const stepsState = steps.map((stepp, index) =>
      Object.assign(
        {},
        {
          icon: stepp.icon,
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

    setPercentage((step / 4) * 100);
  }, [step]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'w-full flex items-center '
            : 'flex items-center'
        }
      >
        <div className='relative flex flex-col items-center text-teal-600'>
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected
                ? 'bg-green-600 text-white font-bold border border-green-600 '
                : 'bg-gray-200'
            }`}
          >
            {step.completed ? (
              <span className='text-white material-icons-sharp'>
                {step?.icon}
              </span>
            ) : (
              <span className='text-white  material-icons-sharp'>
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

  console.log(percentage);

  return (
    <>
      <div className='mx-4 p-4 flex justify-between items-center'>
        {stepsDisplay}
      </div>

      <div
        class={`${progressStyles.progress} w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 my-14`}
      >
        <div
          class={`${progressStyles.bgCustom}  h-4 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default StepAnimation;
