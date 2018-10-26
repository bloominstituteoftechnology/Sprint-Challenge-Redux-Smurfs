import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            nameText: "",
            ageText: "",
            heightText: ""
        };
    }

    typeHandler = ev => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    submitHandler = ev => {
        ev.preventDefault();
        this.props.addSmurf({
            name: this.state.nameText,
            age: Number(this.state.ageText),
            height: this.state.heightText
        });
        this.setState({
            nameText: "",
            ageText: "",
            heightText: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Add New Smurf</h1>
                <input
                    name="nameText"
                    type="text"
                    placeholder="Name"
                    value={this.state.nameText}
                    onChange={this.typeHandler}
                    required
                />
                <input
                    name="ageText"
                    type="number"
                    placeholder="Age"
                    value={this.state.ageText}
                    onChange={this.typeHandler}
                    required
                />
                <input
                    name="heightText"
                    type="text"
                    placeholder="Height"
                    value={this.state.heightText}
                    onChange={this.typeHandler}
                    required
                />
                <button type="submit">Populate Village</button>
            </form>
        );
    }
}

export default connect(
    null,
    { addSmurf }
)(SmurfForm);