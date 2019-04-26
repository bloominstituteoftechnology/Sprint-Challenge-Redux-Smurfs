import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }
    addSmurfHandler = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.smurf);
        this.setState({
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }


    changeHandler = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value,
                [e.target.age]: e.target.value,
                [e.target.height]: e.target.value
            }
        })
    }
    render() {
        return(
            <form className="addForm" onSubmit={this.addSmurfHandler}>
                <h1>Add a Smurf</h1>
                <input  
                    onChange={this.changeHandler}
                    type="text"
                    name="name"
                    value={this.state.smurf.name}
                    placeholder="name"
                />
                <br></br>
                <input
                    onChange={this.changeHandler}
                    type="text"
                    name="age"
                    value={this.state.smurf.age}
                    placeholder="age"
                />
                <br></br>
                <input
                    onChange={this.changeHandler}
                    type="text"
                    name="height"
                    value={this.state.smurf.height}
                    placeholder="height"
                />
                <br></br>
                <button type="submit">Add </button>
            </form>
        )
    }
}

export default connect(null, {addSmurf})(SmurfForm);