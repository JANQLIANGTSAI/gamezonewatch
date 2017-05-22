import React from 'react';
import { Button} from 'reactstrap';

class GZWFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        {/*

          <Button color="primary" onClick={this.handleCheckINClick}>Check In</Button>{' '}
          <Button color="secondary" onClick={this.handleCheckOUTClick}>Check Out</Button>
        */}

        <p>
          <Button color="primary">primary</Button>{' '}
          <Button color="secondary">secondary</Button>{' '}
          <Button color="success">success</Button>{' '}
          <Button color="info">info</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="link">link</Button>
        </p>

        {/*
        <p>
          <br/>
          <Button color="primary" size="sm">New Group</Button>{' '}
          <Button color="secondary" size="sm">Add Members</Button>
        </p>
        */}

      </div>
    );
  }
}

export default GZWFooter;
