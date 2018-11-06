import React, { Component } from 'react';

class Toggle extends Component {
    state = {  }
    render() { 
        return (  
            
              
             <div className="switch center">
                <label>
                <span className="white-text">Off(Pick from unique)</span>
                    <input type="checkbox" onChange={this.props.toggled}></input>
                    <span className="lever"></span>
                <span className="white-text">On(Pick from all students)</span>
                </label>
             </div>
           
        );
    }
}
 
export default Toggle ;