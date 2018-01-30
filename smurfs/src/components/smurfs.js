import React, { Component } from 'react';
import './smurfs.css';
import { connect } from 'react-redux';
import { updateSmurf, killSmurf } from '../actions';

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.smurf.name,
            age: this.props.smurf.age,
            height: this.props.smurf.height,
            update: false
        };
    }

    updateChangeHandler = event => {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    updateToggle = () => {
        const active = !this.state.update
        this.setState({update: active});
    }

    smurfUpdate = event => {
        event.preventDefault();
        const smurf = {
            name:this.state.name,
            age: this.state.age,
            height: this.state.heightr
        }
        this.updateToggle();
        const id = this.props.smurf.id;
        this.props.updateSmurf(smurf, id);
    }

    smurfKill = event => {
        event.preventDefault();
        const id = this.props.smurf.id;
        this.props.killSmurf(id);
    }

    render() {
        return (
            <div className="smurf">
                <div>
                    <div>{this.props.smurf.name}</div>
                    <div>{this.props.smurf.age} years old</div>
                    <div>{this.props.smurf.height} tall</div>
                </div>
                <button onClick={this.updateToggle}>Update</button>
                <button onClick={this.smurfKill}>Kill</button>
                <form style={this.state.update ? null : {display: 'none'}}>
                     <input placeholder="name" name="name" value={this.state.name} onChange={this.updateChangeHandler} type="text" />
                    <input placeholder="age" name="age" value={this.state.age} onChange={this.updateChangeHandler} type="number" />
                    <input placeholder="height" name="height" value={this.state.height} onChange={this.updateChangeHandler} type="text" />
                    <br/>
                    <button onClick={this.smurfUpdate}>Save</button>
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

export default connect(mapStateToProps, {updateSmurf, killSmurf})(Smurf);
