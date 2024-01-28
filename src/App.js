import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './components/Router';
import { useContext, useEffect, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { conText } from './components/context/centralState';

function App() {
  const {setUsername} = useContext(conText);

  useEffect(()=>{
    if(sessionStorage.getItem("logged")){
      setUsername(true);
    }
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
