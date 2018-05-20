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

    // handleSmurfName & saveHandler are concerned with updating/editing smurf info
    handleSmurfName = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveHandler = () => {

        const newSmurf = { 
            name: this.state.updatedSmurfName || this.props.smurf.name, 
            age: this.state.updatedSmurfAge || this.props.smurf.age, 
            height: this.state.updatedSmurfHeight || this.props.smurf.height, 
            id: this.props.smurf.id
        }  
        
            /*added || logic so that no newSmurf properties remain empty, 
            without that logic, code was not functioning.
            Empty strings in JS evaluate to false so if this.state.whateverProperty 
            is an empty string, the property's value defaults to the existing value 
            on the smurf object that is being passed down from SmurfsList
            */

        if (newSmurf.name !== this.state.updatedsmurfName) {
            this.props.updateSmurf(newSmurf);
        }  /* this logic no longer works b/c of multiple input field editing. 
              So need to re-think. For now could just invoke
              this.props.updateSmurf by itself */
       
        this.setState({ 
            showForm: false, 
            updatedSmurfName: "", 
            updatedSmurfAge: "", 
            updateSmurfHeight: ""
        });

    } 

    render() {
        return (
            <div className="smurf">

                {this.props.smurf.name}  {this.props.smurf.age}  {`${this.props.smurf.height}cm`}

                {this.state.showForm ? 
                    <div>
                        <input 
                            name="updatedSmurfName" 
                            onChange={this.handleSmurfName} 
                            value={this.state.updatedSmurfName} 
                            placeholder="Edit Name">
                        </input>

                        <input 
                            name="updatedSmurfAge" 
                            onChange={this.handleSmurfName} 
                            value={this.state.updatedSmurfAge} 
                            placeholder="Edit Age">
                        </input> 

                        <input 
                            name="updatedSmurfHeight" 
                            onChange={this.handleSmurfName} 
                            value={this.state.updatedSmurfHeight} 
                            placeholder="Edit Height">
                        </input> 
                    </div>
                : null }

                <div> 
                    
                    {!this.state.showForm ? 
                        <button 
                            className="smurf-btn" 
                            onClick={() => this.setState({showForm: true})}>Edit
                        </button> 
                    : 
                        <button 
                            className="smurf-btn"  
                            onClick={() => {this.saveHandler()}}>Save
                        </button>
                    }
                    
                    <button 
                        className="smurf-btn" 
                        onClick={()=>(this.handleDeleteSmurf(this.props.smurf.id))}>Delete
                    </button>

                </div>

            </div>
        )
    }
}



export default connect(null, { updateSmurf, deleteSmurf })(Smurf);