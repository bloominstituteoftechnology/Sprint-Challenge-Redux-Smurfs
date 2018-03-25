import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Smurf.css';

export class Smurf extends Component {
    state = {
        id: '',
        name: '',
        age: '',
        height: ''
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    }

    componentDidMount() {
        this.setState({
            id: this.props.smurf.id
        })
    }

    render() {
        return (
            <div className="SmurfContainer">
                <h1>{this.props.smurf.name}</h1>
                <h4>{this.props.smurf.age} years | {this.props.smurf.height}cm</h4>
                <form className="Update" onSubmit={() => this.props.updateSmurf(this.state)}>
                    <h4>Update {this.props.smurf.name}</h4>
                    <input name="name" placeholder="Name" onChange={this.handleChange.bind(this)}/>
                    <input name="age" placeholder="Age" onChange={this.handleChange.bind(this)}/>
                    <input name="height" placeholder="Height" onChange={this.handleChange.bind(this)}/>
                    <button value="submit">Update</button>
                    <button onClick={() => this.props.deleteSmurf(this.state.id)}>Delete</button>
                </form>
            </div>
        );
    }
} 

  
export default connect()(Smurf);