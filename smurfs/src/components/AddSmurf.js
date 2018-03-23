// React
import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
// actions
import { post_smurf } from "../actions";

class AddSmurf extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

    render() {
        return (
            <form>

              <label>name</label>
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleNewInput}
                />

                <label>age</label>
                <input
                  type='number'
                  name='age'
                  value={this.state.age}
                  onChange={this.handleNewInput}
                />

                <label>height in metric</label>
                <input
                  type='number'
                  name='height'
                  value={this.state.height}
                  onChange={this.handleNewInput}
                />

              <button type='submit' onClick={this.submitSmurf}>Submit New Smurf</button>
        </form>
        )
    } // end render()

    handleNewInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    submitSmurf = event => {
        const { name, age, height } = this.state;
        const newSmurf = { name, age, height };
        this.props.post_smurf(newSmurf);
        this.setState({
            name: '',
            
        })
    }
} // end of AddSmurf component

export default connect(null, { post_smurf })(AddSmurf);