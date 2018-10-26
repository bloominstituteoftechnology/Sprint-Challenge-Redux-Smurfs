import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';



class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleAddSmurf = event => {
        event.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.addSmurf(newSmurf);
        this.setState({ name: '', age: '', height: '' });
    }


    render() {
        return (
            <form className='smurfForm'>
                <input
                    value={this.state.name}
                    name='name'
                    type='text'
                    placeholder='name'
                    onChange={this.handleChange}
                />
                <input
                    value={this.state.age}
                    name='age'
                    type='text'
                    placeholder='age'
                    onChange={this.handleChange}
                />
                <input
                    value={this.state.height}
                    name='height'
                    type='text'
                    placeholder='height'
                    onChange={this.handleChange}
                />
                <button onClick={this.handleAddSmurf}>Add Smurf</button>




            </form>
        )
    }
}







export default connect(null, { addSmurf })(SmurfForm);