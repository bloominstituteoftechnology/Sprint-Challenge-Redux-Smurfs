import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editSmurf } from "../actions";

class EditSmurfForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        name: "",
        age: "",
        height: "",
    };
}

inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

editSmurf = (id) => {
    this.props.editSmurf(this.state.name, this.state.age, this.state.height, id);
    this.setState({
        name: "",
        age: "",
        height: ""
    });
};

render() {
    return (
        <form onSubmit={() => this.editSmurf(this.props.smurf.id)}>
          <input 
            onChange={this.inputHandler}
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Name"
           />
           <input 
            onChange={this.inputHandler}
            name="age"
            value={this.state.age}
            type="number"
            placeholder="Age"
           />
           <input 
            onChange={this.inputHandler}
            name="height"
            value={this.state.height}
            type="height"
            placeholder="Height"
           />
           <button onClick={() => this.editSmurf(this.props.smurf.id)}>Edit Smurf</button>
           </form>
      );
    }
};

  export default connect( () => {}, {editSmurf} )(EditSmurfForm);