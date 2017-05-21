import React from 'react';
import { Button} from 'reactstrap';

class GZWButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <p>
          <Button color="primary">primary</Button>{' '}
          <Button color="secondary">secondary</Button>{' '}
          <Button color="success">success</Button>{' '}
          <Button color="info">info</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="link">link</Button>
        </p>
        <p>
          <Button color="primary" size="lg">Large Button</Button>{' '}
          <Button color="secondary" size="lg">Large Button</Button>
        </p>
      </div>
    );
  }
}

export default GZWButton;
