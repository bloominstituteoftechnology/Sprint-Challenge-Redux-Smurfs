import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        placeholder='Name'
                    />
                    <input
                        placeholder='Age'
                    />
                    <input
                        placeholder='Height'
                    />
                </form>
            </div>
        )
    }
}

const mstp = state => {
    return {}
}

export default connect(mstp, { addSmurf })(SmurfForm);