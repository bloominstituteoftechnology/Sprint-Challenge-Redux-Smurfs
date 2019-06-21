import React, { Component } from 'react'

class SmurfForm extends Component {
    state = {
        activeSmurf: {
            name: '',
            age: '',
            height: ''
        },
        isUpdating: false
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.activeSmurf !== this.props.activeSmurf)
            this.setState({
                activeSmurf: this.props.activeSmurf,
                isUpdating: true
            })
    }
    
    
    handleChanges = e => {
        this.setState ({
            activeSmurf:{
                ...this.state.activeSmurf,
                [e.target.name]: e.target.value
            }
        })
    }

    formSubmit = e => {
        e.preventDefault()
        if(this.state.isUpdating)
            this.props.update(this.state.activeSmurf)
        else
            this.props.add(this.state.activeSmurf)
        this.setState({
            activeSmurf:{
                name: '',
                age: '',
                height: ''
            },
            isUpdating: false
        })
    }
    render() {
        return (
            <form onSubmit = {(e => this.formSubmit(e))}>
                <input 
                type="text"
                name="name"
                label="Name"
                onChange={this.handleChanges}
                value={this.state.activeSmurf.name}
                />
                <input
                    type="text"
                    name="age"
                    label="Age"
                    onChange={this.handleChanges}
                    value={this.state.activeSmurf.age}
                />
                <input
                    type="text"
                    name="height"
                    label="height"
                    onChange={this.handleChanges}
                    value={this.state.activeSmurf.height}
                />
                <input
                    type="submit"
                    name="Submit"
                />
            </form>
        )
    }
}

export default SmurfForm
