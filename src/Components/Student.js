//imrc to import react //component
//cc to import class component

import React, { Component } from 'react';

class Student extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="center">
        <h1>{this.props.student.name}</h1>
        <img src={this.props.student.img}></img>
        </div>             
        );
    }
}

export default Student;
 