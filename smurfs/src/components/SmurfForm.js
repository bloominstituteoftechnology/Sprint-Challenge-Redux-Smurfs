import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../actions';


class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: null,
                name: '',
                age: '',
                height: ''
        }

    //Important to bind the correct this
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        if(this.props.smurf){
            console.log("did mount", this.props.smurf.name);
            this.setState(this.props.smurf);
        }
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        const smurf = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        };
        console.log("New Smurf ", smurf);
        if(smurf.id === null) {
            this.props.addSmurf(smurf);
            this.setState({
                id: null,
                name: '',
                age: '',
                height: ''
            })
        } else {
            this.props.updateSmurf(smurf);
        }
        
    }


    render() { 
        return (
            <div className="SmurfCard-container">
                <form className="SmurfCard-form" onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    </label>
                    <input
                        value={this.state.name} 
                        placeholder="Smurf Name"
                        name="name" 
                        onChange={this.handleInputChange}/>
                    <label>
                        Age:
                    </label>
                    <input
                        value={this.state.age}
                        placeholder="Smurf Age"
                        name="age" 
                        onChange={this.handleInputChange}/>
                    <label>
                        Height:
                    </label>
                    <input value={this.state.height} 
                        placeholder="Smurf Height in cm"
                        name="height" 
                        onChange={this.handleInputChange}/>
                    </form>
                    <div>
                        <button 
                            className="ok-button"
                            onClick={this.handleSubmit}>
                            Submit
                        </button>
                        <button 
                            className="cancel-button"
                            onClick={this.handleCancel}>
                            Cancel
                        </button>
                    </div>
            </div>
          )
    }
}
 
const mapStateToProps = state => {
    console.log("mapStateToProps form ", state);
    return {
        smurfs: state.smurfs,
        fetching: state.fetching,
        fetched: state.fetched,
        deleting: state.deleting,
        deleted: state.deleted,
        error: state.error
    };
}
 
export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfForm);