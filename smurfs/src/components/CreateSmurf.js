import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Label, Input, Button } from 'reactstrap'

import {addSmurf} from '../actions'

class CreateSmurf extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: 0,
        }
    }

    handleOnchange = (event) => {
        this.setState({ })

    }


    handleSubmit = (event) => {
        this.props.addSmurf(this.state)
    }
    
    render() {
        return (
            <Form>
                <Label for='name'>name</Label>
                <Input type='text' name='name' id='name' placeholder='choose a witty name' />
                <Label for='name'>age</Label>
                <Input type='number' age='age' id='age' placeholder='usually equal to your IQ' />
                <Button onClick={this.handleSubmit}>Once you Submit; it's permanent, like hairloss </Button>
            </Form>
        )
    }
}

export default connect(null, { addSmurf })(CreateSmurf)
