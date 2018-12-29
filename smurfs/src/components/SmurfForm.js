import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            age: '',
            height: '',
        };
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    addSmurf = e => {
        e.preventDefault();
        let smurf = {...this.state}
        this.props.addSmurf(smurf);
        this.setState({ name: '', age: '', height: ''});
    };



    render() {
        return (
            <div className="smurf-form">
                <form>
                    <input 
                        type="text" 
                        value={this.state.name}
                        name='name'
                        onChange={this.handleChanges}
                        placeholder="Name">
                    </input>
                    <input 
                        type="text" 
                        value={this.state.height}
                        name='height'
                        onChange={this.handleChanges}
                        placeholder="Height">
                    </input>
                    <input 
                        type="text" 
                        value={this.state.age}
                        name='age'
                        onChange={this.handleChanges}
                        placeholder="Age">
                    </input>
                    <button onClick={this.addSmurf}>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { addSmurf })(SmurfForm);