import './App.css';
import ContextProvider from './contexts/ContextProvider';
import SignUpForm from './pages/SignUpForm/SignUpForm';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Header />
        <SignUpForm />
      </ContextProvider>
    </div>
  );
}

export default App;
