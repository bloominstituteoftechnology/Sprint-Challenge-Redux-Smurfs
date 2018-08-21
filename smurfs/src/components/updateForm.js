import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: `${this.props.inputName}`,
            age: `${this.props.inputAge}`,
            height: `${this.props.inputHeight}`,
            id: `${this.props.id}`
        }
    }

    inputChangeHandler = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    };

    updateSmurfHandler = ev => {
        ev.preventDefault();
        this.props.updateSmurf(`${this.state.id}`, {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        });
        this.setState({
          name: '',
          age: '',
          height: '',
          showForm: false
        });
      }

    render() {
        return (
            <div>
            <form onSubmit={this.updateSmurfHandler} >
                <input placeholder='name...' onChange={this.inputChangeHandler} name='name' value={this.state.name} />
                <input placeholder='age...' onChange={this.inputChangeHandler} name='age' value={this.state.age} />
                <input placeholder='height...' onChange={this.inputChangeHandler} name='height' value={this.state.height} />
                <button>Mutate Smurf</button>
            </form>
        </div>
        )
    }

}

export default connect(null, {updateSmurf}) (UpdateForm);