import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './components/Router';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
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
