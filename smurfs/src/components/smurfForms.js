import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post_smurfs } from '../actions';
class SmurfForm extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            age: 0,
            height: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    submitSmurf = (e) => {
        e.preventDefault();
        const newSmurf = this.state;
        this.props.post_smurfs(newSmurf);
        this.setState({[e.target.name] : ''})

    }

    render(){
        return (
            <div>
                <form>
                    <label>
                        Name : 
                        <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Age : 
                        <input type='text' name='age' value={this.state.age} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        height :
                        <input type='text' name='height' value={this.state.height} onChange={this.handleInputChange} />
                    </label>
                    <button onClick={this.submitSmurf}>Add Smurf</button>
                </form>

            </div>
        )
    }
}

export default connect(null, { post_smurfs })(SmurfForm);