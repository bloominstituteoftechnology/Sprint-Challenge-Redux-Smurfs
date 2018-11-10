import React from 'react';
import {connect} from 'react-redux';

import {addSmurf} from '../actions/index';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: undefined,
            height: undefined,
        }
    }

    submitForm = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addSmurf(this.state);

    }

    valueChanged = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input name='name' value={this.state.name} onChange={this.valueChanged} />
                <input name='age' value={this.state.age} onChange={this.valueChanged} />
                <input name='height' value={this.state.height} onChange={this.valueChanged} />
                <button type='submit'>Add le SMurf!</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf})(Form);