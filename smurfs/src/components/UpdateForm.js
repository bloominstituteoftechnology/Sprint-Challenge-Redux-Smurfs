import React from 'react';
import { connect } from 'react-redux';

import {updateSmurf} from '../actions/index';

class UpdateForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    };

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.updateSmurf(this.props.id, this.state.name, this.state.age, this.state.height);
        this.props.closeUpdateForm()
    }


    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="name" placeholder="name" value={this.state.name} onChange={this.inputHandler} />
                    <input name="age" placeholder="age" value={this.state.age} onChange={this.inputHandler}/>
                    <input name="height" placeholder="height" value={this.state.email} onChange={this.inputHandler}/>
                    <input type="submit" value="Update Smurf"/>
                </form>
            </div>
        )
    }
};

export default connect(() => ({}), { updateSmurf })(UpdateForm);