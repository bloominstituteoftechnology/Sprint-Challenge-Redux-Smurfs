import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component{
    state = {
        name: '',
        age: '',
        height: '',
        id: ''
    };
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = () => {
        let currentId = Math.floor(Math.random() * 1000000);
        this.props.addSmurf(this.state);
        this.setState({name:'', age:'', height: '', id: currentId});
    }

    render() {
        return (
            <form>
                <input
                    className="input"
                    value={this.state.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={this.changeHandler}
                />
                <input
                    className="input"
                    value={this.state.age}
                    name="age"
                    type="text"
                    placeholder="Age"
                    onChange={this.changeHandler}
                />
                <input
                    className="input"
                    value={this.state.height}
                    name="height"
                    type="text"
                    placeholder="Height"
                    onChange={this.changeHandler}
                />
                <button onClick={() => this.submitHandler()} type="button">Add Smurf</button>
            </form>
        );
    }
}
export default connect(null, {addSmurf})(SmurfForm);