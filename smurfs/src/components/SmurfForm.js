import React from 'react';
import { createSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
};

newSmurfHandler = event => {
    event.preventDefault();
    const {name, age, height} = this.state;
    this.props.createSmurf({name, age, height});
    this.setState({ name: '', age: '', height: '' })
};

render() {
    return (
        <form onSubmit = { this.newSmurfHandler }>
        
        <input
            type='text'
            value={ this.state.name }
            name='name'
            placeholder='smurf name'
            onChange={ this.changeHandler }
        />

        <input
        type='text'
        value={ this.state.age }
        name='age'
        placeholder='age'
        onChange={ this.changeHandler }
        />

        <input
        type='text'
        value={ this.state.height }
        name='height'
        placeholder='height'
        onChange={ this.changeHandler }
        />

        <button onClick = { this.newSmurfHandler }>Add Smurf</button>
        </form>
    )
}
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingSmurf: state.smurfReducer.creatingSmurf
    };
};

export default connect(mapStateToProps, { createSmurf })(SmurfForm);