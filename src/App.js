import './App.css';
import ContextProvider from './contexts/ContextProvider';
import SignUpForm from './pages/SignUpForm/SignUpForm';
import Header from './components/Header/Header';
import StepInfo from './components/StepInfo/StepInfo';

function App() {
  return (
    <div className='App container mx-auto'>
      <ContextProvider>
        <Header />
        <StepInfo />
        <SignUpForm />
      </ContextProvider>
    </div>
  );
}

export default App;
