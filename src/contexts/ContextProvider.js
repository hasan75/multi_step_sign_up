import { useState, createContext, useContext } from 'react';

export const FormContext = createContext();

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const [step, setStep] = useState(1);

  const setFormValues = (values) => {
    setFormData((previousValues) => ({
      ...previousValues,
      ...values,
    }));
  };

  // first render for Date and Time Show
  const [firstRender, setFirstRender] = useState(true);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormValues,

        step,
        setStep,
        firstRender,
        setFirstRender,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default ContextProvider;
