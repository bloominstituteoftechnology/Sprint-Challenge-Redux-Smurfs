import React from 'react';
import { connect } from 'react-redux';

import { editSmurfs } from '../actions';

class SmurfEditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.smurfData.name,
            age: this.props.smurfData.age,
            height: this.props.smurfData.height,
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    editSmurf = event => {
        event.preventDefault();
        this.props.editSmurfs(this.state, this.props.smurfId);
    }

    render() {
        return(
            <div className={this.props.shouldOpenForm ? 'edit-form' : 'hide'}>
                <form onSubmit={this.editSmurf}>
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
                    <button>Change Smurf</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { editSmurfs })(SmurfEditForm);