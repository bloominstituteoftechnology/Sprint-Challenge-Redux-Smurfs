import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions/index";

class SmurfsForm extends Component {
    state = {
        newSmurf:{
        name:'',
        age:'',
        height:''
    }
};
componentDidMount(){
    this.props.getSmurfs();
};
changeHandler = e => {
    this.setState({ 
        newSmurf: {
            ...this.state.newSmurf,
            [e.target.name]: e.target.value
        }
    })
};
submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
        newSmurf: {
            name: '',
            height: '',
            age: ''
        }
    })
};
render() {
    return (
        <div className = "App">
            <div> 
                {this.props.smurf.map(smurf => {
                    return (
                        <Smurf 
                            name={smurf.name}
                            id={smurf.id}
                            height={smurf.height}
                            age={smurf.age}
                            deleteSmurf={this.deleteSmurf}
                        />
                    );
                })}
            </div>
            <form onSubmit={this.submitHandler}>
                <h2>Add Those Smurfs!</h2>
                <input 
                    onChange={this.changeHandler}
                    type='text'
                    placeholder= "Name Me"
                    value={this.state.newSmurf.name}
                    name="name"
                />
                <input 
                    onChange={this.changeHandler}
                    type="text"
                    placeholder= "Age Me"
                    value={this.state.newSmurf.age}
                    name="age"
                />
                <input 
                    onChange={this.changeHandler}
                    type="text"
                    placeholder="How Tall"
                    value={this.state.newSmurf.height}
                    name="height"
                />
                <button className="md-button" type="submit">
                    Add Smurf
                </button>
            </form>
        </div>
    )
}}