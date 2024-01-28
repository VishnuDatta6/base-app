import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './components/Router';
import { useContext, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { conText } from './components/context/centralState';

function App() {
  const {setUsername} = useContext(conText);

  useEffect(()=>{
    if(localStorage.getItem("logged")){
      setUsername(true);
    }
    // eslint-disable-next-line
  },[])
  return (
    <>
    <BrowserRouter>
    <ErrorBoundary>
      <Router />
      </ErrorBoundary>
    </BrowserRouter>
    </>
  );
}

export default App;
