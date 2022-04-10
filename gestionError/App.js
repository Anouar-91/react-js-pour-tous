import './App.css';
import React, { Component } from 'react';
import Goku from './component/Goku'
import Freezer from './component/Freezer'
import Vegeta from './component/Vegeta'
import ErrorBoundary from './component/ErrorBoundary'

class App extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1>Cliquer sur les gentils</h1>
        <div className="row">
          <Goku />
          <ErrorBoundary>
            <Freezer />
          </ErrorBoundary>
          <Vegeta />
        </div>
      </div>
    );
  }

}

export default App;
