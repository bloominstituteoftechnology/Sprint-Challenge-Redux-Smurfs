import React from 'react';
import { connect } from 'react-redux';

import { addSmurfs } from '../actions';

class SmurfAddForm extends React.Component {
    constructor(){
        super();
        this.state ={
            name: '',
            age: '',
            height: '',
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addSmurf = event => {
        event.preventDefault();
        this.props.addSmurfs(this.state);
        this.setState({
            name: '',
            age: '',
            height: '',
        })
    }

    render() {
        return(
            <div className='add-form'>
                <form onSubmit={this.addSmurf}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder={`New Smurf's Name`}
                        onChange={this.handlesChanges}
                        isrequired 
                    />
                    <input
                        type='number'
                        name='age'
                        value={this.state.age}
                        placeholder='Age'
                        onChange={this.handlesChanges}
                        isrequired 
                    />
                    <input
                        type='text'
                        name='height'
                        value={this.state.height}
                        placeholder='Height'
                        onChange={this.handlesChanges}
                        isrequired 
                    />
                    <button>Add Smurf</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addSmurfs })(SmurfAddForm);