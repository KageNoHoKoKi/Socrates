import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( <button onClick= {this.props.handleClicked}>Pick Student!</button> );
    }
}
 
export default Button;