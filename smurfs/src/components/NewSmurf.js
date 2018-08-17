import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs, postSmurf} from '../actions/index';

import styled from 'styled-components';

const FormWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    background-color: #222;

    > form {
        display: flex;
        justify-content: center;
        align-items: center;
        > input {
            margin: 5px 5px;
        }
    }
`
const StyledButton = styled.button`

    width: 50px;
    height: 50px;
    margin: 5px 5px;
    cursor: pointer;
    background: url(https://static.getjar.com/icon-50x50/00/55332_thm.jpg) no-repeat;
        

`


class NewSmurf extends Component {
    constructor() {
        super();
        this.state = { 
            name: '',
            age: '',
            height: ''
         }
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }


    addNew = () => {
        this.props.postSmurf(this.state);
        this.props.getSmurfs();
    }


    render() { 

        const {name, age, height} = this.state;
        return ( 
            <FormWrap>
                
                <form>
                        <input
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={(event) => this.change(event)}
                        />
                        <input
                        name='age'
                        placeholder='Age'
                        value={age}
                        onChange={(event) => this.change(event)}
                        />
                        <input
                        name='height'
                        placeholder='Height'
                        value={height}
                        onChange={(event) => this.change(event)}
                        />
                        <StyledButton onClick={() => this.addNew(this.state)}></StyledButton>
                    </form>
                
            </FormWrap>
         );
    }
}
 
export default connect(null, {getSmurfs, postSmurf})(NewSmurf);