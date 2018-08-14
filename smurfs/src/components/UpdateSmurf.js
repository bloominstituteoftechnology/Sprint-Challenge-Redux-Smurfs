import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import { updateSmurf } from '../actions';
import { connect } from 'react-redux';

const StyledForm = styled(Form)`
    border: 1px solid whitesmoke;
    box-shadow: 2px 2px 5px #0a1f42;
    margin: 30px 0;
    padding: 20px;
    width: 30vw;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

class UpdateSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    updateSmurf = () => {
        this.props.updateSmurf(this.props.id, this.state);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <StyledForm>
                    <FormGroup>
                        <Label for="name">New Name: </Label>
                        <Input onChange={this.handleChange} type="text" name="name" id="name" placeholder="...enter new name"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">New Age: </Label>
                        <Input onChange={this.handleChange} id="age" type="number" name="age" placeholder="...enter new age"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">New Height: </Label>
                        <Input onChange={this.handleChange} id="height" type="text" name="height" placeholder="...enter new height"></Input>
                    </FormGroup>
                </StyledForm>
                <Button onClick={this.updateSmurf}>Update Smurf</Button>
            </div>
        )
    }
}

export default connect(null, {updateSmurf})(UpdateSmurf);