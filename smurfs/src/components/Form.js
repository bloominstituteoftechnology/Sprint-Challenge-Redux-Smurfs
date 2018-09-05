import React, { Component } from "react";
import { connect } from 'react-redux';
import { addingSmurf } from '../actions/index';


class SmurfForm extends Component {
    render() {
        return (
            <div>
                <input
                    type="text" 
                    onChange="this.onChangeSmurf" 
                    name="name" 
                    value={this.state.name} 
                    placeholder="Smurf Name" />
                <input
                    type="text" 
                    onChange="this.onChangeSmurf" 
                    name="name" 
                    value={this.state.age} 
                    placeholder="Smurf Age" />
                <input
                    type="text" 
                    onChange="this.onChangeSmurf" 
                    name="name" 
                    value={this.state.height} 
                    placeholder="Smurf Height" />
            </div>
              )
        }
    }
    
export default connect(null, {addingSmurf}(SmurfForm);