import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSmurf, deleteSmurf } from '../actions'; 
import './Smurf.css';


class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            updatedSmurfName: "",
            updatedSmurfAge: "",
            updatedSmurfHeight: ""
        }
    }

   handleDeleteSmurf = (id) => {
       this.props.deleteSmurf(id);
    }


    handleSmurfName = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveHandler = () => {
        const newSmurf = { name: this.state.updatedSmurfName || this.props.smurf.name, age: this.state.updatedSmurfAge || this.props.smurf.age, height: this.state.updatedSmurfHeight || this.props.smurf.height, id: this.props.smurf.id}
        if (newSmurf.name !== "") {
            this.props.updateSmurf(newSmurf);
        }
       
        this.setState({showForm: false, updatedSmurfName: "", updateSmurfAge: "", updateSmurfHeight: ""});

    } 

    render() {
        return (
            <div>
                {this.props.smurf.name}  {this.props.smurf.age}  {`${this.props.smurf.height}cm`}
                {this.state.showForm ? <div><input name="updatedSmurfName" onChange={this.handleSmurfName} value={this.state.updatedSmurfName} placeholder="Edit Name"></input>
                <input name="updatedSmurfAge" onChange={this.handleSmurfName} value={this.state.updatedSmurfAge} placeholder="Edit Age"></input> 
                <input name="updatedSmurfHeight" onChange={this.handleSmurfName} value={this.state.updatedSmurfHeight} placeholder="Edit Height"></input> 
                </div>
                : null }
                <div>
                    {!this.state.showForm ? <button className="smurf-btn" onClick={() => this.setState({showForm: true})}>Edit</button> : <button className="smurf-btn"  onClick={() => {this.saveHandler()}}>Save</button>}
                    <button className="smurf-btn" onClick={()=>(this.handleDeleteSmurf(this.props.smurf.id))} className="smurf-btn">Delete</button>
                </div>
            </div>
        )
    }
}



export default connect(null, { updateSmurf, deleteSmurf })(Smurf);