import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if(this.state.hasError){
      return <h1>Ooops. That is not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;