import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAdd = event => {
        event.preventDefault();
        let { name, age, height } = this.state;
        age = parseInt(age, 10);
        this.props.addSmurf(name, age, height);
        this.setState({
            name: '',
            age: '',
            height: '',
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleInput} type='text' name='name' value={this.state.name} placeholder='Enter Smurf Name' /> <br />
                    <input onChange={this.handleInput} type='number' name='age' value={this.state.age} placeholder='Enter Smurf Age' /> <br />
                    <input onChange={this.handleInput} type='text' name='height' value={this.state.height} placeholder='Enter Smurf Height' /> <br /> 
                    <button onClick={this.handleAdd}> ADD SMURF </button>   
                </form>    
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);