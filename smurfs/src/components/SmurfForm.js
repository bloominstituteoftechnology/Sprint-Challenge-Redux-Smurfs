import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: '',
            height: '',
         }
    }
    // componentDidMount() {
    //     this.setState(this.props.smurf)
    //     console.log('mounted smurfes: ', this.props.smurfs)
    // }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.addSmurf(newSmurf);
        this.setState({ name: '', age: '', height: ''})
    }

    render() { 
        return ( 
            <form className='form'>
                <input value={this.state.name} type='text' name='name' placeholder='Name' onChange={this.handleChange} />
                <input value={this.state.age} type='number' name='age' placeholder='Age' onChange={this.handleChange} />
                <input value={this.state.height} type='text' name='height' placeholder='Height' onChange={this.handleChange} />
                <button onClick ={this.handleSubmit}>Add New Smurf</button>
            </form>
         );
    }
}

// const mapStateToProps = state => {
//     console.log('state in form: ', state)
//     return {
//         smurfs: state.smurfs,
        
//     }
// }
export default connect(null, { addSmurf }) (SmurfForm);