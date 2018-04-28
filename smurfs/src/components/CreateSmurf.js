import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Label, Input, Button } from 'reactstrap'

import {addSmurf} from '../actions'

class CreateSmurf extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({name: '', age: '', height: '' });
        console.log(this.state)
    }
    
    render() {
        return (
            <Form>
                <Label for='name'>name</Label>
                <Input type='text' name='name' id='name' value={this.state.name} onChange={this.handleChange} placeholder='choose a witty name' />
                <Label for='age'>age</Label>
                <Input type='number' name='age' id='age' value={this.state.age} onChange={this.handleChange} placeholder='usually equal to your IQ' />
                <Label for='height'>height</Label>
                <Input type='number' name='height' id='height' value={this.state.height} onChange={this.handleChange} placeholder='NOT your shoe size' />
                <Button onClick={this.handleSubmit}>Once you Submit; it's permanent, like hairloss </Button>
            </Form>
        )
    }
}

export default connect(null, { addSmurf })(CreateSmurf)
