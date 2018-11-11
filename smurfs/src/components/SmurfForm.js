import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            height: ""
        }
    }
    inputChange = e => {
         this.setState({
             [e.target.name]: e.target.value
         })
    }
    
    submitHander = e => {
        e.preventDefault();
        this.props.addSmurfs(this.state)
    }
    render() {
        return (
            <div className='form'>
              <form onSubmit={this.submitHander}>
                <input
                   type='text' 
                   placeholder="name"
                   value={this.state.name}
                   name="name"
                   onChange={this.inputChange} />
                <input type='text' name="age"
                       placeholder="age"
                       value={this.state.age} 
                       onChange={this.inputChange} />

                <input type="text" placeholder='height'
                       value={this.state.height}
                       name="height"
                       onChange={this.inputChange} />

                <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

// export default SmurfForm;

const mapStateToProps = state => {
     return {

     }
}

export default connect(mapStateToProps, {addSmurfs})(SmurfForm);