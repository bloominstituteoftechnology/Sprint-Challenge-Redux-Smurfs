import React, { Component } from 'react';
import './Smurf.css'
import {connect} from 'react-redux';
import {updateSmurf, deleteSmurf} from '../actions'

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.smurf.name,
            age: this.props.smurf.age,
            height: this.props.smurf.height,
            update: false
        }
    }

    updateChangeHandler = event => {
        const {name, value} = event.target
        this.setState({ [name]: value });
    }

    updateToggle = () => {
        const active = !this.state.update
        this.setState({update: active});
    }

    smurfUpdate = event => {
        event.preventDefault();
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.updateToggle();
        const id = this.props.smurf.id;
        this.props.updateSmurf(smurf, id);
    }

    smurfDelete = event => {
        event.preventDefault();
        const id = this.props.smurf.id;
        this.props.deleteSmurf(id);
    }

    render() {
        return (
            <div className="smurf">
                <ul>
                    <li>{this.props.smurf.name}</li>
                    <li>{this.props.smurf.age} years old</li>
                    <li>{this.props.smurf.height} tall</li>
                </ul>
                <button onClick={this.updateToggle}>Update</button>
                <button onClick={this.smurfDelete}>Delete</button>
                <form style={this.state.update ? null : {display: 'none'}}>
                    <input placeholder="name" name="name" value={this.state.name} onChange={this.updateChangeHandler} type="text" />
                    <input placeholder="age" name="age" value={this.state.age} onChange={this.updateChangeHandler} type="number" />
                    <input placeholder="height" name="height" value={this.state.height} onChange={this.updateChangeHandler} type="text" />
                    <br/>
                    <button onClick={this.smurfUpdate}>save</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, {updateSmurf, deleteSmurf})(Smurf)