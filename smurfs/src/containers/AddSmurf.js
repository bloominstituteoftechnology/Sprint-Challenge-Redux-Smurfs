import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

const InputContainer = styled.div`
    width:450px;
    display:flex;
    flex-flow:column;
    border: solid 1px black;
`;

class AddSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            height: null, 
        }
    }

    componentDidMount() {
        
    }

    handleInput = (e) => {
        console.log(e.target.value);
        // e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    submitSmurf = () => {
        this.props.addSmurf(this.state);
    }

    render() {
        return (
            <InputContainer>
                <input name="name" placeholder="name" onChange={this.handleInput} />
                <input name="age" placeholder="age" onChange={ this.handleInput } />
                <input name="height" placeholder="height" onChange={this.handleInput } />
                <button onClick={this.submitSmurf}>Add Smurf</button>
            </InputContainer>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { addSmurf } )(AddSmurf);

