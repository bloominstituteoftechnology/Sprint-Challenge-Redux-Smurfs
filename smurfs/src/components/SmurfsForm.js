import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getSmurfs,
    postSmurfs
 } from '../actions'

class SmurfsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    addSmurfs = () => {
        this.props.postSmurfs({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        })
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurfs}>
                    <input onChange={this.handleChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input onChange={this.handleChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <input onChange={this.handleChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <button type="submit">Add Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {
    getSmurfs, postSmurfs
})(SmurfsForm);
