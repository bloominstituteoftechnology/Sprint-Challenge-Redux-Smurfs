import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

class AddSmurfForm extends Component {
    state = {
        name: '', 
        age: '', 
        height: '', 
        // id: ''
    };

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleAddSmurf = () => {
        const {name, age, height} = this.state;
        this.props.addSmurf({name, age, height});
        this.setState({name:'', age:',', height: ''})
    };

    render() {
        return (
            <form>
                <input
                    value = {this.state.name}
                    name = 'name'
                    type = 'text'
                    placeholder= 'name'
                    onChange = {this.handleInputChange}
                />
                <input
                    value = {this.state.age}
                    name = 'age'
                    type = 'text'
                    placeholder= 'age'
                    onChange = {this.handleInputChange}
                />
                <input
                    value = {this.state.height}
                    name = 'height'
                    type = 'text'
                    placeholder= 'height'
                    onChange = {this.handleInputChange}
                />
                <button onClick = {() => this.handleAddSmurf()}>
                    Add Smurf
                </button>
            </form>     
        );
    }

}


const mapStateToProps = state => {
    return {
        error:state.error,
        addingSmurf:state.addingSmurf
    };
};

export default connect (mapStateToProps, {addSmurf})(AddSmurfForm);