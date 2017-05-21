import React, { Component } from 'react';
import './css/App.css';
import GZWNav from './components/GZWNav';
import GZWButton from './components/GZWButton';

// component: reactstrap
import { Alert, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';

class App extends Component {

  render() {
    return (

      <div className="App">

        <GZWNav />

        <Alert color="success">
          <strong>Well done!</strong> You successfully INSTALLED react and reactstrap!.
        </Alert>

        <div className="App-header">
            <h2>Welcome to GamezoneWatch!!</h2>
        </div>

        <p className="App-intro">
            <GZWButton />
        </p>

      </div>

    );
  }
}

export default App;
