import React, { Component } from 'react';

class Sentence extends Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div>
        <p>
          {this.props.sentence}
        </p>
      </div>
    );
  }
}

export default Sentence;
