import React from 'react';
import { updateSmurf } from './../actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';

const UpdateContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class UpdateSingleSmurf extends React.Component {
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
        console.log(this.state)
    }

    editSmurf = (event) => {
        event.preventDefault();
        const id = this.props.smurfs[this.props.id-1].id
        console.log(id);
        this.props.updateSmurf(this.props.smurfs[this.props.id-1].id,
           { name: this.state.name,
            age: this.state.age,
            height: this.state.height}
        );
        console.log(this.state.name)
        this.setState({name: '', age: 0, height: ''})
    }


    render() {
        return (
            <UpdateContainer>
            <h3>Edit smurf </h3>
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
                    <button onClick={this.editSmurf}>Submit Changes</button>
                </form>
            </UpdateContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs.smurfs
    }
}

const mapActionsToProps = {
    updateSmurf: updateSmurf
}

export default connect( mapStateToProps, mapActionsToProps )(UpdateSingleSmurf);