import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf, deleteSmurf } from '../actions';

class Smurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: props.smurf,
            name: props.smurf.name,
            age: props.smurf.age,
            height: props.smurf.height,
            showForm: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        const smurf = {
            name: this.state.name, 
            age: this.state.age, 
            height: this.state.height,
            id: this.state.smurf.id
        }
        this.props.updateSmurf(smurf);
    }

    render() { 
        return (
            <div className="smurf-card">
                <h2>{this.state.smurf.name}</h2>
                <span>{`Age: ${this.state.smurf.age} years old`}</span>
                <span>{`Height: ${this.state.smurf.height}`}</span>
                {this.state.showForm ? (
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="name" 
                            value={this.state.name}
                            onChange={this.handleChange}/>
                        <input
                            name="age" 
                            value={this.state.age}
                            onChange={this.handleChange}/>
                        <input
                            name="height" 
                            value={this.state.height}
                            onChange={this.handleChange}/>
                        <button className="btn">Submit changes</button>
                    </form>
                ) : (
                    <div className="buttons">
                        <button 
                            className="btn update"
                            onClick={() => {this.setState({showForm: true})}}>
                            Update
                        </button>
                        <button 
                            className="btn delete"
                            onClick={() => {this.props.deleteSmurf(this.state.smurf)}}>
                            Delete
                        </button>
                    </div>
                )} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        updating: state.updatingSmurf,
        updated: state.updateSmurf,
        deleting: state.deletingSmurf,
        deleted: state.deletedSmurf
    }
}
 
export default connect(mapStateToProps, { updateSmurf, deleteSmurf })(Smurf);