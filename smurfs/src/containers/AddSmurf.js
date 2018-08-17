import React, { Component } from 'react';
import styled from 'styled-components';
import { } from 'redux';
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
        this.props.getSmurfs();
    }

    render() {
        return (
            <InputContainer>
                <input />
                <input />
                <input />
            </InputContainer>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurf);

