import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/index';

class NewSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    changeHandler = event => {
        if (event.target.name === 'age') {
            this.setState({
                [event.target.name]: Number(event.target.value)
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    };

    submitHandler = event => {
        event.preventDefault();
        if (this.state.name && this.state.age && this.state.height) {
            const newSmurf = Object.assign({}, this.state);
            this.setState({
                name: '',
                age: '',
                height: ''
            }, this.props.addSmurf(newSmurf));
        } else {
            alert('Please complete all inputs');
        }
    };

    render() {
        return (
            <form className="new-smurf-form" onSubmit={this.submitHandler}>
                <input type="text" name="name" id="name" placeholder="Name" onChange={this.changeHandler} value={this.state.name} />
                <input type="number" name="age" id="age" placeholder="Age" onChange={this.changeHandler} value={this.state.age} />
                <input type="text" name="height" id="height" placeholder="Height" onChange={this.changeHandler} value={this.state.height} />
                <button type="submit">Add new smurf</button>
            </form>
        )
    };
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        addingSmurf: state.addingSmurf,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { addSmurf }
)(NewSmurfForm);