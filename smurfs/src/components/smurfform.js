import React from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    render() {
        return (
            <div className="SmurfForm" >
                <form onSubmit={this.addSmurf}>
                    <input onChange={this.updateName} placeholder="name" value={this.state.name}/>
                    <input onChange={this.updateAge} placeholder="age" value={this.state.age}/>
                    <input
                        onChange={this.updateHeight}
                        placeholder="height"
                        value={this.state.height}/>
                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }

    addSmurf = event => {
        event.preventDefault();
        this
            .props
            .addSmurf(this.state);
        this.setState({name: '', age: '', height: ''});
    }

    updateName = (event) => {
        this.setState({name: event.target.value});
    }

    updateAge = (event) => {
        this.setState({age: event.target.value});
    }

    updateHeight = (event) => {
        this.setState({height: event.target.value});
    }
};

const mapPropsToState = state => {
    return state;
};

export default connect(mapPropsToState, {addSmurf})(SmurfForm);