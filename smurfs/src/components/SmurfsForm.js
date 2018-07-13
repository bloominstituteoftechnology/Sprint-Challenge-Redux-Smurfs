import React, { Component } from 'react';

class SmurfsForm extends Component {
    constructor(props) {
        super(props);
    }
    this.state = {
        name: '',
        age: '',
        height: '',
    }
}

addSmurfs = e => {
    this.setState({
        name: '',
        age: '',
        height: ''
    })
}

handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

render() {
    return (
        <div>
            <form onSubmit={this.addSmurfs}
            <input onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
            />
        </div>
    )
}