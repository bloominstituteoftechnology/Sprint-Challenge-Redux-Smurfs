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
            <>
            <form onSubmit = {(e => this.formSubmit(e))}>
                <div className="input_and_label">
                <label for={this.state.activeSmurf.name}>Name:</label>
                <input 
                    type="text"
                    name="name"
                    onChange={this.handleChanges}
                    value={this.state.activeSmurf.name}
                />
                </div>
                <div className="input_and_label">
                <label for={this.state.activeSmurf.age}>Age:</label>
                <input
                    type="text"
                    name="age"
                    onChange={this.handleChanges}
                    value={this.state.activeSmurf.age}
                />
                </div>
                <div className="input_and_label">
                <label for={this.state.activeSmurf.height}>Height(cm):</label>
                <input
                    type="text"
                    name="height"
                    onChange={this.handleChanges}
                    value={this.state.activeSmurf.height}
                />
                </div>
                <input
                    className="submit"
                    type="submit"
                    name="Submit"
                />
            </form>
            <hr></hr>
            </>
        )
    }
}

export default SmurfForm
