import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

class SmurfForm extends Component {
    state ={
        name: '',
        age: '',
        height: '',
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleAddSmurf = () => {
        const {name, age, height} = this.state;
        this.props.addSmurf({name,age,height});
        this.setState({name: '',age: '',height: ''});
    };

    render() {
        return (
            <form>

                <input
                className='input'
                value={this.state.name}
                name='name'
                type='text'
                placeholder='name'
                onChange={this.handleInputChange}
                />

                <input
                className='input'
                value={this.state.age}
                name='age'
                type='text'
                placeholder='age'
                onChange={this.handleInputChange}
                />

                <input
                className='input'
                value={this.state.height}
                name='height'
                type='text'
                placeholder='height'
                onChange={this.handleInputChange}
                />
                <button
                    onClick={()=> this.handleAddSmurf()} type='button'>
                    Add New Smurf!
                </button>
                
            </form>
        );
    }

}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingSmurf: state.creatingSmurf,
    };
};

export default connect (
    mapStateToProps,
    {addSmurf}
)(SmurfForm);