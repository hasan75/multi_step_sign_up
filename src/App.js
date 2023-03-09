import './App.css';
import ContextProvider from './contexts/ContextProvider';
import SignUpForm from './pages/SignUpForm/SignUpForm';
import Header from './components/Header/Header';
import StepInfo from './components/StepInfo/StepInfo';
import StepAnimation from './components/StepAnimation/StepAnimation';

function App() {
  return (
    <div className='App container mx-auto px-4 w-full lg:w-9/12'>
      <ContextProvider>
        <Header />
        <StepAnimation />
        <StepInfo />
        <SignUpForm />
      </ContextProvider>
    </div>
  );
}

export default App;
