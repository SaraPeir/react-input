import React, { Component } from 'react';


class Input extends Component {

  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div>
        <input type="text" value = {this.props.inputText} onChange = {this.props.onHandleChangeInputText} />
      </div>
    );
  }
}


export default Input;
