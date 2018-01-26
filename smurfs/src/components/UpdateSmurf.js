import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions'; 

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      age: this.props.data.age,
      height: this.props.data.height,
      save: false,
    };
  }

  handleUpdate = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitUpdate = event => {
    event.preventDefault();
    const update = {
      index: this.props.index,
      update: {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      },
    };
    let active = this.state.save;
    this.props.updateSmurf(update);
    this.setState({ save: !active });

    console.log(update);
  };
    render() {
    return (
      <form style={this.state.save ? { display: 'none' } : null}>
        <input
          placholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleUpdate}
        />
        <input
          placholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleUpdate}
        />
        <input
          placholder="height"
          name="height"
          value={this.state.height}
          onChange={this.handleUpdate}
        />
        <button onClick={this.submitUpdate}>save</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfUpdated: state.smurfUpdated,
  };
};

// connect components for update
export default connect(mapStateToProps, { updateSmurf })(UpdateSmurf);
