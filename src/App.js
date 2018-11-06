import React, { Component } from 'react';
import '.'
import './App.css';
import Student from './Components/Student'
import Button from './Components/Button'
import Toggle from './Components/Toggle'

class App extends Component {
  constructor(props) {
    super(props);
    //picks students from picked=false and sets pickedStudents.picked = true
    //so that next time the pickedStudent is not picked
    //true = already picked

    this.state = {
      students: [
        {
          name: 'Shirley',
          img: 'https://picsum.photos/200/300/?random',
          picked: false
        },
        {
          name: 'Christian',
          img: 'https://picsum.photos/200/300/?random',
          picked: false
        },
        {
          name: 'Maple',
          img: 'https://picsum.photos/200/300/?random',
          picked: false
        }
      ],
      pickFromAll: true,
      pickedStudent: { name: '', img: '' },
    }
  }


  pickUniqueStudent = () => {
    const studentsUnpicked = this.state.students.filter(student => student.picked == false);
    console.log(studentsUnpicked);
    let pickedStudent = studentsUnpicked[Math.floor(Math.random() * this.state.students.length)];
    pickedStudent.picked = true;

    return pickedStudent;
  }

  pickStudent = () => {
    let pickedStudent = null;
    
    if (this.state.pickFromAll == true) {
      pickedStudent = this.pickUniqueStudent();
    } else {
      let index = Math.floor(Math.random() * this.state.students.length);
      console.log(index);
      pickedStudent = this.state.students[index];
    }

    
      //call this.setState to update our state
      this.setState(() => ({
        pickedStudent: pickedStudent
      }))
  }


  toggleOnAndOff = () => {
    this.setState(() => ({
      pickFromAll: !(this.state.pickFromAll)
    }))
    console.log(this.state.pickFromAll)
  }

  render() {

    return (
      <div>
        <Student student={this.state.pickedStudent} />
        <Button handleClicked={this.pickStudent} />
        <Toggle toggled={this.toggleOnAndOff} />
      </div>

    );
  }


}



export default App;


// pickUniqueStudent = () => {
//   const studentsUnpicked = this.state.students.filter(student => student.picked == false);
//   let pickedStudent = studentsUnpicked[Math.floor(Math.random() *this.state.students.length)];
//   pickedStudent.picked = true;
//   //call this.setState to update our state
//   this.setState(() => ({
//     pickedStudent: pickedStudent
//   }))

// pickAnyStudent = () => {
//   return this.students[Math.floor(Math.random() *this.state.students.length)];
// }

// if (this.state.student.picked==true) {
//   this.pickUniqueStudent();
// } else {
//   this.pickAnyStudent();
// }

//on = pick from unique students ; off = pick from all