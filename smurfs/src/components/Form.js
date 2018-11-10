import React from 'react';
import {connect} from 'react-redux';

import {addSmurf, updateSmurf} from '../actions/index';

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
        if (this.props.type === 'Add Smurf') {
            this.props.addSmurf(this.state);
        }
        else {
            this.props.updateSmurf(this.props.id, this.state);
        }
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
                <button type='submit'>{this.props.type}</button>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {addSmurf, updateSmurf})(Form);