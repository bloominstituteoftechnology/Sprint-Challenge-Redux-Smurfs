import React, { Component } from 'react';
import AddSmurfForm from './AddSmurfForm'
import SmurfsDisplay from './SmurfsDisplay';

class SmurfsContainer extends Component {
    render() {
        return (
            <div>
                <SmurfsDisplay />
                <AddSmurfForm />
            </div>
        );
    }
};

export default SmurfsContainer;