import Account from '../components/steps/Account/Account';
import FormResponse from '../components/steps/FormResponse/FormResponse';
import Image from '../components/steps/Image/Image';
import Personal from '../components/steps/Personal/Personal';

//encryption
import CryptoJS from 'crypto-js';

const utils = {};

utils.formContentStep = (step, setStep) => {
  let currentStep;

  switch (step) {
    case 1:
      currentStep = <Account step={step} setStep={setStep} />;
      break;
    case 2:
      currentStep = <Personal step={step} setStep={setStep} />;
      break;
    case 3:
      currentStep = <Image step={step} setStep={setStep} />;
      break;
    case 4:
      currentStep = <FormResponse step={step} setStep={setStep} />;
      break;
    default:
      break;
  }

  return currentStep;
};

//encryption function
utils.encrypt = (string) => {
  return CryptoJS.AES.encrypt(
    string,
    process.env.REACT_APP_SECRET_KEY
  ).toString();
};

// decrypt string
utils.decrypt = (string) => {
  const decryptedMsg = CryptoJS.AES.decrypt(
    string,
    process.env.REACT_APP_SECRET_KEY
  );
  // console.log(decryptedMsg.toString(CryptoJS.enc.Utf8));
  return decryptedMsg.toString(CryptoJS.enc.Utf8);
};

// local storage functions for get and set data

utils.saveDataToLocal = (formData) => {
  localStorage.setItem('formData', utils.encrypt(JSON.stringify(formData)));
};

utils.saveStepToLocal = (step) => {
  localStorage.setItem('step', utils.encrypt(JSON.stringify(step)));
};

export default utils;
