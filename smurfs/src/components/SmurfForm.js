import React from 'react';
import { connect } from 'react-redux';
import { addingSmurf } from '../actions';

class AddSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            height: null,
        }
    }

    inputHandler = event => {
        this.setState({[event.target.name]: event.target.value})
      }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addingSmurf(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' placeholder='Enter Smurf Name' value= {this.state.name} onChange={this.inputHandler} />
                <input type='number' name='age' placeholder='Enter Smurf Age' value={this.state.age} onChange={this.inputHandler} />
                <input type='number' name='height' placeholder='Enter Smurf Height' value={this.state.height} onChange={this.inputHandler} />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default connect ( () => {}, {addingSmurf: addingSmurf})(AddSmurf);