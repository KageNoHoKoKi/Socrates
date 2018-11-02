import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Components/Student'
import Button from './Components/Button'
import Toggle from './Components/Toggle'
class App extends Component {
  pickRandomStudent = () => {
    
    //call this.setState to update our state
    this.setState(() => ({
      pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
    }))

  }
constructor(props){
  super(props);
  this.state = {
    students: [
    {
      name: 'Shirley',
      img: 'https://picsum.photos/200/300/random'
    },
    {
      name:'Christian',
      img: 'https://picsum.photos/200/300/random'
    },
    {
      name:'Maple',
      img:'https://picsum.photos/200/300/random'
    }
    ],
    pickFromAll: true,
    pickedStudent: null
  }
}
  render() {
    return (
      <div>
        <div><Student student = {this.state.pickedStudent}/></div>
        <div><Button handleClicked = {this.pickRandomStudent}/></div> 
        <div>Toggle</div>
      </div>
      
    );
  }
}

export default App;
