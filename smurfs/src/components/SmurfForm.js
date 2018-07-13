import React from 'react';
import { connect } from 'react-redux';
import { addData, fetchData } from '../actions';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = e => {this.setState({ [e.target.name]: e.target.value, });}
    handleAddNew = () => {
        console.log('handleSubmitFrined')
        this.props.addData({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        })
    }

    render() {
        return ( 
            <div className='smurf-form'>
                <p>Smurf Form</p>
                <input name='name' type='text' onChange={this.handleChange} placeholder='Name' />
                <input name='age' type='number' onChange={this.handleChange} placeholder='Age' />
                <input name='height' type='text' onChange={this.handleChange} placeholder='Height' />
                <button onClick={this.handleAddNew}>Add Friend</button>   
            </div>
        );    
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        addingSmurf: state.addingSmurf
    }
}
 
export default connect(mapStateToProps, { addData, fetchData })(SmurfForm);