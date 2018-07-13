import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeSmurf } from '../actions/index'
class DeleteSmurf extends Component {
    constructor() {
        super();
        this.state = {
            id: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        className="field"
                        type="number"
                        placeholder="id"
                        name="id"
                        onChange={this.handleChange}
                        value={this.state.id}
                    />
                    <button className="field-btn" onClick={() => this.props.removeSmurf(this.state.id)}>Delete smurf</button>
                </form>
            </div>);

    }
}

export default connect(null, { removeSmurf })(DeleteSmurf);