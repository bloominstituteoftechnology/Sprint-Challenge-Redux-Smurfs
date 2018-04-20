import React from 'react'
import {addSmurf} from "../../actions";
import {connect} from 'react-redux';

class SmurfForm extends React.Component {

    state = {
        name: '',
        age: '',
        height: '',
        id: '',
    };

    inputHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    addSmurf = (event) => {
        event.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: '',
        });
    };

    render() {

        return (

            <form>
                <input
                    onChange={this.inputHandler}
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    onChange={this.inputHandler}
                    type="number"
                    name="age"
                    placeholder="Age"
                />
                <input
                    onChange={this.inputHandler}
                    type="text"
                    name="height"
                    placeholder="height"
                />
                <button type="submit" onClick={this.addSmurf}>
                    Add Smurf
                </button>
            </form>
        );
    }
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        addingSmurf:state.addingSmurf,
        fetchingSmurf: state.fetchingSmurfs,
        error: state.error,
    }
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);