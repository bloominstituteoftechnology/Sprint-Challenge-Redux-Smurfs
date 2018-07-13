import React from 'react';
import { addSmurf } from './../actions';
import { connect } from 'react-redux';

class AddSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            height: ''
        }
    }

    updateForm = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    addNewSmurf = (event) => {
        event.preventDefault();
        this.props.addSmurf(
           { name: this.state.name,
            age: this.state.age,
            height: this.state.height}
        );
        console.log(this.state.name)
        this.setState({name: '', age: 0, height: ''})
    }


    render() {
        return (
            <div>
            <h3>Add a smurf </h3>
            <form>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    defaultValue=''
                    onChange={this.updateForm}
                    />
                    <input 
                    type='text'
                    name='age'
                    placeholder='Age'
                    defaultValue=''
                    onChange={this.updateForm}
                    />
                    <input 
                    type='text'
                    name='height'
                    placeholder='Height'
                    defaultValue=''
                    onChange={this.updateForm}
                    />
                    <button onClick={this.addNewSmurf}>Add Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

const mapActionsToProps = {
    addSmurf: addSmurf
}

export default connect( mapStateToProps, mapActionsToProps )(AddSmurf);