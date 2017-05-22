import React, { Component } from 'react';
import './css/App.css';

import { Button} from 'reactstrap';

import GZWNav from './components/GZWNav';
import GZWMessage from './components/GZWMessage';
import GZWFooter from './components/GZWFooter';

// component: reactstrap
// import { Alert, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleCheckINClick = this.handleCheckINClick.bind(this);
    this.handleCheckOUTClick = this.handleCheckOUTClick.bind(this);
    this.contentDisplay = this.contentDisplay.bind(this);

    this.state = {
      mode: "welcome",
      "action": "nothing",
      date: new Date()
    }
  }

  handleCheckINClick() {
    this.setState({mode: "checkIn"});
  }

  handleCheckOUTClick() {
    this.setState({mode: "checkOut"});
  }

  contentDisplay(props) {
      const mode = props.mode;

      if ( mode === "welcome" ) {
        return (
          <div className="App-content">
            <Button color="primary" size="lg" block onClick={this.handleCheckINClick}>Check In</Button>{' '}
            <Button color="secondary" size="lg" block onClick={this.handleCheckOUTClick}>Check Out</Button>
          </div>
        );
      } else {
        return (
          <div>

          <hr/>
            <p>mode: {props.mode}</p>
            <GZWMessage
              modeProp={this.state.mode}
              actionProp={this.state.action}
              dateProp={this.state.date}
            />
          <hr/>
        </div>
        );
      }
  }

  render() {
    return (

      <div className="App">
        <div className="wrapper">

          {/* Show Navigation Area */}
          <GZWNav
              checkInHandle={this.handleCheckINClick}
              checkOutHandle={this.handleCheckOUTClick}
          />

          <br/><br/>

          {/* Show Content Area */}
          { this.contentDisplay(this.state) }

        </div>
        <div className="footer">
          <GZWFooter />
        </div>
      </div>

    );
  }
}

export default App;
