import React, { Component } from "react";
import { connect } from "react-redux";
import { updating, deleteSmurf } from '../actions';
import EditForm from "./EditForm";

class Smurf extends Component {
    constructor() {
        super();
    }

    deleteSmurf = event => {    
        let id = Number(event.target.id);
        this.props.deleteSmurf(id)
    }

    render() {
        const { name, age, height, id } = this.props.smurf
        return (
            <div className="smurf-card">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Height: {height}</div>
                <div className='smurf-btns'>
                    <div className='btn' onClick={() => this.props.updating()}>edit</div>
                    <div className='btn' id={id} onClick={this.deleteSmurf}>delete</div>
                </div>
                {this.props.editing === true ? <EditForm smurf={this.props.smurf}/> : <img className='smurf-img' src={require('../images/smurf.png')} alt='Smurf'/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        editing: state.editing
    };
};

export default connect(mapStateToProps, { updating, deleteSmurf })(Smurf);