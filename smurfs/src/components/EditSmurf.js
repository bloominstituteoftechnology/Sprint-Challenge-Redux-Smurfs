import React from 'react';

class EditSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            height: 0
        }
    }

    componentDidMount() {
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        // const id = this.props.match.params.id;
        this.props.editSmurf(this.state, this.props.smurfId);
    }

    render() {
        console.log(this.props.smurfId);
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.handleChange} name="name" placeholder="name" value={this.state.name} type="text" />
                    <input onChange={this.handleChange} name="age" placeholder="age" value={this.state.age} type="number" />
                    <input onChange={this.handleChange} name="height" placeholder="height" value={this.state.height} type="number" />
                    <button>Submit Changes</button>
                </form>
            </div>
        )
    }
}

export default EditSmurf;