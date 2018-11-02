//imrc to import react //component
//cc to import class component

import React, { Component } from 'react';

class Student extends Component {
    state = {  }
    render() { 
        return ( <h1>{this.props.student.name}</h1> );
    }
}

export default Student;
 