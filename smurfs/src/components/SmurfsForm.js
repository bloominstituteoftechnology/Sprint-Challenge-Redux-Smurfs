import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';


class SmurfsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
    }
};

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    handleAddSmurf = () => {
        const { name, age, height } = this.state;
        this.props.addSmurfs({ name, age, height });
        this.setState({ name: '', age: '', height: ''});
    };

    render() {
        return (
            <form className="column-layout">
            <input
                value={this.state.name}
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
            />
            <input
                value={this.state.age}
                name="age"
                placeholder="Age"
                onChange={this.handleInputChange}
            />
            <input
                value={this.state.height}
                name="height"
                placeholder="Height"
                onChange={this.handleInputChange}
            />
            <button onClick={() => this.handleAddSmurf()} type="button">
                Add Smurf
            </button>
            </form>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         error: state.error,
//         addingSmurf: state.addingSmurf
//     };
// };

export default connect(null, { addSmurfs })(SmurfsForm);