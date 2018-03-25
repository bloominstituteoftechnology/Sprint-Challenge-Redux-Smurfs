import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';
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
    }

    handleUpdate() {
        this.props.updateSmurf(this.state);
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
                <form className="Update" onSubmit={() => this.handleUpdate()}>
                    <h4>Update {this.props.smurf.name}</h4>
                    <input placeholder="Name"/>
                    <input placeholder="Age"/>
                    <input placeholder="Height"/>
                    <button value="submit">Update</button>
                </form>
            </div>
        );
    }
} 

const mapDispatchToProps = (dispatch) => {
    return ({
        updateSmurf: updateSmurf()
    })
}
  
export default connect(null, mapDispatchToProps)(Smurf);