import React, { Component } from 'react';
import './App.css';
import Sentence from './Components/Sentence';
import Input from './Components/Input';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
  inputText: '',
  sentenceText: 'Hola! Escribe algo en input'
  }
  this.changeInputText = this.changeInputText.bind(this);
  }

changeInputText(event){
this.setState({
inputText: event.target.value
});

if(event.target.value.length == 0){
  this.setState({
  sentenceText: 'Escribe algo en input'
  })} else{
    this.setState({
    sentenceText: event.target.value
    });
}
}

  render() {
    return (
      <div className="App">
        <Input onHandleChangeInputText = {this.changeInputText} inputValue = {this.state.inputText}/>
        <Sentence sentence = {this.state.sentenceText}/>
      </div>
    );
  }
}

export default App;
