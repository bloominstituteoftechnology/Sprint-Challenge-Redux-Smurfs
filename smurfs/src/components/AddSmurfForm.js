import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAddSmurfBtn = () => {
        const newSmurf = this.state;
        this.props.addSmurf(newSmurf);
        this.setState({ name: '', age: '', height: '' })
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleInputChange} name='name' value={this.state.name} placeholder='Add name...' />
                    <input onChange={this.handleInputChange} name='age' value={this.state.age} placeholder='Add age...' />
                    <input onChange={this.handleInputChange} name='height' value={this.state.height} placeholder='Add height...' />
                    <button onClick={this.handleAddSmurfBtn} >Register Smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSmurf })(AddSmurfForm);