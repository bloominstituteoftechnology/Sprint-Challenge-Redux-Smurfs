import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, updateSmurf } from '../actions/index';

class Smurf extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    clickHandler = event => {
        event.preventDefault
        this.props.deleteSmurf(this.props.smurf.id)
    }

    updateSmurf = (event) => {
        event.preventDefault();

        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }

        this.props.updateSmurf()

        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <div>{this.props.smurf.name}</div>
                <div>{this.props.smurf.age}</div>
                <div>{this.props.smurf.height}</div>
                <form>
                    <input
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <input
                        placeholder='Age'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleInputChange}
                    />
                    <input
                        placeholder='Height'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleInputChange}
                    />
                    <button>Update Smurf!</button>
                </form>
                <button onClick={this.clickHandler}>X</button>
            </div >
        )
    }
}

const mstp = state => {
    return {}
}

export default connect(mstp, { deleteSmurf, updateSmurf })(Smurf);