import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: 0
    };
  }

handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

handleAddSmurf = smurf => {
    this.props.addSmurf(smurf);
    this.props.fetchSmurfs();
}

  render() {
    return (
      <div className="SmurfForm">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick={() => this.handleAddSmurf(this.state)} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(SmurfForm);
