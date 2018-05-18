import React, { Component } from "react";
import { connect } from "react-redux";
import { submitSmurf } from "../actions";

class EditSmurfForm extends Component {
    state = {
        id: "",
        name: "",
        age: "",
        height: ""
    };

    componentDidMount = () => {
        const { id, name, age, height } = this.props;
        this.setState({
            id,
            name,
            age,
            height
        });
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        const { id, name, age, height } = this.state;
        return (
            <div>
                <input
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={e => this.handleChange(e)}
                />
                <input
                    name="age"
                    placeholder="age"
                    value={age}
                    onChange={e => this.handleChange(e)}
                />
                <input
                    name="height"
                    placeholder="height"
                    value={height}
                    onChange={e => this.handleChange(e)}
                />
                <button
                    onClick={() => this.props.submitSmurf({ id, name, age, height })}
                >
                    Submit
        </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { smurfs } = state.smurfsReducer;
    return smurfs.filter(smurf => smurf.Editing)[0];
};

export default connect(mapStateToProps, { submitSmurf })(EditSmurfForm);