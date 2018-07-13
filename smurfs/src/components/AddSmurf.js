import React from 'react';
import { addSmurf } from './../actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';

const FormContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    border: 1px solid black;
    padding: 20px;
    background: white;
    box-shadow: 5px 5px 5px;
`;

const InputContainer = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
height: 110px;
`;

const InputField = Styled.input`
    width: 80%;
`;
const Title = Styled.h2`
color: deepskyblue;
text-shadow: 2px 2px #000000;
font-family: 'Boogaloo', sans-serif;
font-size: 32px;
`;

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
            <FormContainer>
            <Title>Add a smurf </Title>
            <InputContainer>
                <InputField 
                    type='text'
                    name='name'
                    placeholder='Name'
                    defaultValue=''
                    onChange={this.updateForm}
                    />
                    <InputField 
                    type='text'
                    name='age'
                    placeholder='Age'
                    defaultValue=''
                    onChange={this.updateForm}
                    />
                    <InputField 
                    type='text'
                    name='height'
                    placeholder='Height'
                    defaultValue=''
                    onChange={this.updateForm}
                    />
                    <button onClick={this.addNewSmurf}>Add Smurf</button>
                </InputContainer>
            </FormContainer>
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