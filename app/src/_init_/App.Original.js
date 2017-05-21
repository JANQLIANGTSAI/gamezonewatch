import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// test reactstrap
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Example from './components/Examples/Example';
import Example2 from './components/Examples/Example2';


class App extends Component {

  render() {
    return (

      <div className="App">

        <Alert color="success">
          <strong>Well done!</strong> You successfully INSTALLED react and reactstrap!.
        </Alert>

        <Example />

        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <input type="file" accept="image/*" capture="camera" />
        <hr />
        <input type="file" accept="image/*;capture=camera" />
        <hr/>


        <p /><p />
        <Example2 />

        function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert('getUserMedia() is not supported in your browser');
}

      </div>

    );
  }
}

export default App;
