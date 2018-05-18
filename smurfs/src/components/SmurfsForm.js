import React, { Component } from 'react';
import { getSmurfs } from '../actions';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfsForm extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Smurfs Form',
            name: '',
            age: 0,
            height: ''
        }
    }

    componentDidMount() {
        this.props.getSmurfs();
    }

    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    createSmurf = () => {
        console.log('This Props Length', this.props.smurfs.length + 1);
        this.props.addSmurf({ name: this.state.name, age: this.state.age, height: this.state.height, id: this.props.smurfs.length });
        this.setState({ name: '', age: 0, height: '' });
    }

    render() {
        console.log(this.props.smurfs.length)
        return (
            <div className='form'>
                <h3>{this.state.title}</h3>
                <input type='text' name='name' value={this.state.name} placeholder='Smurf Name' onChange={this.handleOnChange} /><br />
                <input type='number' min='1' name='age' value={this.state.age} placeholder='Smurf Age' onChange={this.handleOnChange} /><br />
                <input type='text' name='height' value={this.state.height} placeholder='Smurf Height' onChange={this.handleOnChange} /><br />
                <button onClick={this.createSmurf}>Add New Smurf</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            smurfs: state.smurfs,
        }
    )
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfsForm); 
