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
          name: 'Perry',
          img: 'https://picsum.photos/200/300?image=1041',
          picked: false
        },
        {
          name: 'Ferb',
          img: 'https://picsum.photos/200/300?image=1042',
          picked: false
        },
        {
          name: 'Phineas',
          img: 'https://picsum.photos/200/300?image=1043',
          picked: false
        }
      ],
      pickFromAll: true,
      pickedStudent: { name: '', img: '' },
    }
  }
  resetStudents = () => {
    let students = this.state.students;
    console.log("in the function!");

    for (let i = 0; i < this.state.students.length; i++) {
      console.log(i);
      students[i].picked = false;
    }
  }

  pickUniqueStudent = () => {
    const studentsUnpicked = this.state.students.filter(student => student.picked == false);
    if (studentsUnpicked.length > 0) {
      let pickedStudent = studentsUnpicked[Math.floor(Math.random() * studentsUnpicked.length)];
      pickedStudent.picked = true;
      return pickedStudent;
    } else {
      return {}
    }
    // return {}
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

  resetButton = () => {
    let students = this.state.students;
    let showButton = true;
    for (let i = 0; i < this.state.students.length; i++) {
      if (students[i].picked == false) {
        showButton = false;
      }
    }
    if (showButton) {
      return <div className='center'>
          <p>All the students have been picked.</p>
          <button  className="waves-effect waves-light btn" onClick={this.resetStudents}>Click here to shuffle again</button>
        </div>
    } else {
      console.log(this.state.students.picked)
      return <p></p>

    }
  }

  render() {

    return (
      <div>
        <Student student={this.state.pickedStudent} />
        <Button handleClicked={this.pickStudent} />
        <Toggle toggled={this.toggleOnAndOff} />


        <this.resetButton />


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