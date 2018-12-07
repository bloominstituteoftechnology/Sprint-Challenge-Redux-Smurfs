import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            age: '',
            height: '',
            id: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: '',
        })
    }


    render() {
        const makeInput = (name, type='text') => (
            <input
                autoComplete='off'
                className='input-section'
                type={type}
                name={name}
                placeholder={name[0].toUpperCase() + name.slice(1)}
                value={this.state[name]}
                onChange={this.handleChange} />
        )


        return (
            <div>
            <form onSubmit={this.submitHandler} autoComplete="nope">
            { makeInput('name') }
            { makeInput('age', 'number') }
            { makeInput('height') }
            <button>Add Smurf</button>
            </form>
            </div>
        )
    }

}

export default connect(
    null, { addSmurf })(SmurfForm);