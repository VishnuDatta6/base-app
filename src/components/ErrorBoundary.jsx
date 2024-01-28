import React, { Component } from 'react';
import Error from '../assets/error-icon.svg';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return {
      hasError: true,
      error: error
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error(error, errorInfo);
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='h-screen w-screen flex flex-col justify-center items-center align-middle'>
          <h2 className='mx-auto'>Something went wrong.</h2>
          <img className='w-24 mx-auto' src={Error} alt='error' />
          <p>{this.state.error && this.state.error.toString()}</p>          
        </div>
      );
    }

    // If no error occurred, render the children as-is
    return this.props.children;
  }
}

export default ErrorBoundary;
