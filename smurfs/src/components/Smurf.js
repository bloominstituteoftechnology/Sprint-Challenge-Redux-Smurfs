import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf } from '../actions';
import EditForm from "./EditForm";

class Smurf extends Component {
    constructor() {
        super();
        this.state = {
            editing: false
        }
    }

    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    deleteSmurf = event => {    
        let id = Number(event.target.id);
        this.props.smurfs.map(smurf => {
            if (smurf.id === id) {
                this.props.deleteSmurf(id)
            }
        })
    }

    render() {
        const { name, age, height, id } = this.props.smurf
        return (
            <div className="smurf-card">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Height: {height}</div>
                <div className='smurf-btns'>
                    <div className='btn' onClick={this.toggleEdit}>edit</div>
                    <div className='btn' id={id} onClick={this.deleteSmurf}>delete</div>
                </div>
                {this.state.editing ? <EditForm smurf={this.props.smurf}/> : <div/ >}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps, { deleteSmurf })(Smurf);