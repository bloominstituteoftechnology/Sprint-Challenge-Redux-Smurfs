import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateSmurf } from '../actions';

class EditForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: null,
            name: '',
            age: '',
            height: '',
        }
    }

    componentDidMount() {
        const { name, age, height, id } = this.props.smurf
        this.setState({
            id,
            name,
            age,
            height
        })
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    editSmurf = event => {
        event.preventDefault();
        let targetId = Number(event.target.id)
        const { id, name, age, email } = this.state;
        let editedSmurf = {id, name, age, email}

        if(editedSmurf) {
            this.props.smurfs.map(smurf => {
                if (smurf.id === targetId) {
                  this.props.updateSmurf(editedSmurf)
                }
            })
            // this.setState(() => ({
            //     id: null,
            //     name: '',
            //     age: '',
            //     email: '',
            // }))
        }
    }

    render() {
        return (
            <div className='smurf-form'>
                <form className='form' onSubmit={this.editSmurf}>Edit Smurf
                    <input name='name' value={this.state.name} onChange={this.changeHandler} type='text' placeholder='Name' required></input>
                    <input name='age' value={this.state.age} onChange={this.changeHandler} type='text' placeholder='Age' required></input>
                    <input name='height' value={this.state.height} onChange={this.changeHandler} type='text' placeholder='Height' required></input>
                    <input className='submit' type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps, { updateSmurf })(EditForm);
