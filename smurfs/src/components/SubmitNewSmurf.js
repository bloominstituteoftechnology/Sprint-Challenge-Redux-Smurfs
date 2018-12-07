import React from 'react';

class SubmitNewSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            height: 0
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addNewSmurf(this.state);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input onChange={this.handleChange} name="name" placeholder="name" value={this.state.name} type="text" />
                <input onChange={this.handleChange} name="age" placeholder="age" value={this.state.age} type="number" />
                <input onChange={this.handleChange} name="height" placeholder="height" value={this.state.height} type="number" />
                <button>Add Smurf</button>
            </form>
        )
    }
}

export default SubmitNewSmurf;