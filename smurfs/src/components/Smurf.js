import React from "react";
import { connect } from "react-redux";

import { deleteSmurf, updateSmurf } from "../actions/index";

export class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.email,
      id: this.props.smurf.id
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurfHandler = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state);
    this.setState({...this.state, clicked: false})
  };

  updateOpener = () => {
    this.setState({...this.state, clicked: true });
  };

  render() {
    const { smurf, deleteSmurf } = this.props;
    if (this.state.clicked) {
      return (
          <div>
          <div>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
          <form onSubmit={this.updateSmurfHandler}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.inputHandler}
              placeholder="Name"
            />
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.inputHandler}
              placeholder="Age"
            />
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.inputHandler}
              placeholder="Height"
            />
            <button type="submit">Submit Changes</button>
          </form>
          </div>
      );
    } else {
      return (
        <div>
          <h2>{smurf.name}</h2>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
          <button onClick={() => deleteSmurf(smurf.id)}>
            Delete {smurf.name}
          </button>
          <button onClick={this.updateOpener}>Update {smurf.name}</button>
        </div>
      );
    }
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { deleteSmurf, updateSmurf }
)(Smurf);