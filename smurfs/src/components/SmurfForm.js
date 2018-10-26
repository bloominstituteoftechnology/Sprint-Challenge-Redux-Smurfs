import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    addSmurf = (event, props) => {
        event.preventDefault();
        if (!this.state.name || !this.state.age || !this.state.height) {
            //need to add a on screen view to render the error
            console.log('please complete each box')
        } else {
            let newSmurf = {
                name: this.state.name,
                age: this.state.age,
                height: this.state.height + 'cm'
            }
            this.props.addSmurf(newSmurf)
        }
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
                    <input
                        onChange={this.handleChange}
                        placeholder='Name'
                        value={this.state.name}
                        name='name'
                    />
                    <input
                        onChange={this.handleChange}
                        placeholder='Age'
                        value={this.state.age}
                        name='age'
                    />
                    <input
                        onChange={this.handleChange}
                        placeholder='Height in cm'
                        value={this.state.height}
                        name='height'
                    />
                    <button type='submit'>ADD SMURF</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addSmurf })(SmurfForm);