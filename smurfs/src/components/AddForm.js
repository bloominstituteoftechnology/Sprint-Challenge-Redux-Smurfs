import React, { Component } from 'react';
import { connect } from "react-redux";
import { addSmurf } from '../actions';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            age: '',
            height: '',
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    addSmurf = event => {
        event.preventDefault();
        const { name, age, height } = this.state;
        let newSmurf = {name, age, height}
        this.props.addSmurf(newSmurf)
        this.setState(() => ({
            name: '',
            age: '',
            height: ''
        }))
    }

    render() {
        return (
            <div className='add'>
                <form className='add-form' onSubmit={this.addSmurf}>Add Smurf
                    <input className='add-input' name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name' required></input>
                    <input className='add-input' name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age' required></input>
                    <input className='add-input' name='height' value={this.state.height} onChange={this.changeHandler} type='text' placeholder='Height' required></input>
                    <input className='add-submit' type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps, { addSmurf })(AddForm);
