import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return (
        <div className="center">    
            <button className="waves-effect waves-light btn" onClick= {this.props.handleClicked}>Pick Student!</button>
            
        </div>   
            );
    }
}
 
export default Button;

