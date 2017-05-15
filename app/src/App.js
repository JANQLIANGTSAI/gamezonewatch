import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// test reactstrap
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Example from './components/Example';

// test Grid
// import Griddle from 'griddle-react';
import Griddle, { plugins } from 'griddle-react';

var data = [
  { "one": "one", "two": "two", "three": "three" },
  { "one": "uno", "two": "dos", "three": "tres" },
  { "one": "ichi", "two": "ni", "three": "san" }
];

const styleConfig = {
  icons: {
    TableHeadingCell: {
      sortDescendingIcon: <small>(desc)</small>,
      sortAscendingIcon: <small>(asc)</small>,
    },
  },
  classNames: {
    Row: 'row-class',
  },
  styles: {
    Filter: { fontSize: 18 },
    Table: { border: "2px solid #555 "},
  }
}

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

        <div className="container-fluid">
          <Griddle data={data} plugins={[plugins.LocalPlugin]} styleConfig={styleConfig} />
        </div>

      </div>

    );
  }
}

export default App;
