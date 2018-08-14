import React, { Component } from 'react';
import DeleteSmurf from './DeleteSmurf'
import AddSmurfForm from './AddSmurfForm'
import SmurfsDisplay from './SmurfsDisplay';

class SmurfsContainer extends Component {
    render() {
        return (
            <div>
                <SmurfsDisplay />
                <AddSmurfForm />
                <DeleteSmurf />
            </div>
        );
    }
};

export default SmurfsContainer;