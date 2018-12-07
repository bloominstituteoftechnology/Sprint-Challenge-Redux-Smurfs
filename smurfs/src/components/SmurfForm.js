import React, { Component } from 'react';

class SmurfForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: ''
        }
    }

    render(){
        return(
            <h1>Smurf Form</h1>
        )
    }
}

export default SmurfForm;