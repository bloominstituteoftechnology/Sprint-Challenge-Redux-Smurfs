import React, { Component } from 'react';

class SmurfForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newSmurf: {
                name: '',
                age: 0,
                height: 0
            }
        }
    }

    handleChange = e => {
        this.setState({
            newSmurf: { 
                ...this.state.newSmurf, 
                [e.target.name]: e.target.value 
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.newSmurf.name === ''){
            alert('Please enter name')
        } else if (this.state.newSmurf.height === 0){
            alert('Please enter a Height')
        } else if (this.state.newSmurf.age < 0){
            alert('Age must be newborn or higher')
        } else {
            this.props.addSmurf(this.state.newSmurf)
            this.setState({
                newSmurf: {
                    name: '',
                    age: 0,
                    height: 0
                }
            })
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input  
                    type='text'
                    name='name'
                    placeholder='Smurf Name'
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}
                />
                <div className="baseline" />
                <input 
                    type="number" 
                    name='age'
                    placeholder='Age in Smurf Years'
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}
                />
                <div className="baseline" />
                <input 
                    type="number"
                    name='height'
                    placeholder='Height in CM'
                    value={this.state.newSmurf.height}
                    onChange={this.handleChange}
                />
                <div className="baseline" />
                <input type='submit' value='Add Smurf'/>
            </form>
        )
    }
}

export default SmurfForm;