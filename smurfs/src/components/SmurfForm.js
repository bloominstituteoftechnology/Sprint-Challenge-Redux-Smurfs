import React from 'react';
import { connect } from 'react-redux';
import { addingSmurf } from '../actions';

class AddSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            size: '',
        }
    }

    inputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' placeholder='Enter Smurf Name' value= 'this.state.name' onClick={this.inputHandler} />
                <input type='number' name='age' placeholder='Enter Smurf Age' value='this.state.age' onClick={this.inputHandler} />
                <input type='number' name='size' placeholder='Enter Smurf Size' value='this.state.size' onClick={this.inputHandler} />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect (mapStateToProps, {addingSmurf: addingSmurf})(AddSmurf);