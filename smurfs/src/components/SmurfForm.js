import React, { Component } from 'react';

class SmurfForm extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Name'/>
                <input type='number' placeholder='Age'/>
                <input type='text' placeholder='Height'/>
                <button>Add New Smurf</button>
            </form>
        );
    }
}

export default SmurfForm;