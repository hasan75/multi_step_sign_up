import React from 'react';

const FormContent = ({ children }) => {
  return (
    <div className='container'>
      <div className='form-contents'>
        <div className='form-inputs'>{children}</div>
      </div>
    </div>
  );
};

export default FormContent;
