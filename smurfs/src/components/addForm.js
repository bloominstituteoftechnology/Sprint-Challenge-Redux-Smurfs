import React from 'react';

class AddForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    addSmurf = (ev) => {
        ev.preventDefault();
        let newSmurf = this.state;
        this.props.addSmurf(newSmurf);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.addSmurf}>
                <input name='name' onChange={this.handleChange}
                    value={this.state.name} />
                <input name='age' onChange={this.handleChange}
                    value={this.state.age} />
                <input name='height' onChange={this.handleChange}
                    value={this.state.height} />
                <button type='submit'>Add Smurf</button>
            </form>
        );
    }
}

export default AddForm;