import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/';

class SmurfForm extends React.Component {
    
            state = {
               newSmurfy:{ 
                name: '',
                age: '',
                height:''
                }
            }
        
    


handleChange = e => {
    this.setState({
        newSmurfy: {
            ...this.state.newSmurfy, [e.target.name]: e.target.value
        }
    });
}

addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurfy);
}

render() {
    return(
        <div>
            <form onSubmit={this.addSmurf}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Add Name Here'
                    onChange={this.handleChange}
                    value={this.state.newSmurfy.name}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='Add Age Here'
                    onChange={this.handleChange}
                    value={this.state.newSmurfy.age}
                />
                <input 
                    type='text'
                    name='height'
                    placeholder='Add Height Here'
                    onChange={this.handleChange}
                    value={this.state.newSmurfy.height}
                />
                <button type='submit'>{this.props.addSmurf }</button>
            </form>
        </div>
    )
}
}
export default connect(null,{addSmurf})(SmurfForm);