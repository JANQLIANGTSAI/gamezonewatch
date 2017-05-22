import React from 'react';

class GZWMessage extends React.Component {
  /** constructor(props) {
    super(props);
  } **/

  render() {

    return (
      <div>

        <h1>{this.props.modeProp}</h1>
        <h2>{this.props.actionProp}</h2>
        <hr/>
        <h2>Refreshed {new Date().toLocaleTimeString()}.</h2>
        <hr color="red" />
        <h2>Initial {this.props.dateProp.toLocaleTimeString()}</h2>


      </div>
    );
  }
}

GZWMessage.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}

export default GZWMessage;
