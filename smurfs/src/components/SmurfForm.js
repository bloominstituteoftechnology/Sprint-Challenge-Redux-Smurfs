import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    state = {
            name: '',
            age: '',
            height: ''
        };

    handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
        };
    
    handleSubmit = e => {
        e.preventDefault();
        const newSmurf = this.state;

        this.props.addSmurf(newSmurf)

        this.setState({
            name: '',
            age: '',
            height: ''
        })
    };


    render() {
        return (
            <div className='SmurfForm'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        name='age'
                        type='number'
                        placeholder='Age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        name='height'
                        type='text'
                        placeholder='Height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Add Smurf</button>   
                </form>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);