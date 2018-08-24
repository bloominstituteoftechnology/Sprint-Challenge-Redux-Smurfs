import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class AddSmurf extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddSmurf = () => {
        const { name, age, height } = this.state;
        this.props.addSmurfs({ name, age, height });
        this.setState({ name: '', age: '', height: '', });
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={this.handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Height"
                    onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddSmurf()} type='submit'>
                    Add New Smurf
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        addSmurfs: state.addSmurfs
    };
}

export default connect(mapStateToProps, { addSmurfs })(AddSmurf);