import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Components/Student'
import Button from './Components/Button'
class App extends Component {
  pickRandomStudent = () => {
    alert('a random student was chosen!'); 
  }
  render() {
    return (
      <div>
        <div><Student student = {{name: 'Richard'}}/></div>
        <div><Button handleClicked = {this.pickRandomStudent}/></div> //this refers to instance of app
        <div>Toggle</div>
      </div>
      
    );
  }
}

export default App;
