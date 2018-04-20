import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() { this.props.fetchSmurfs() }

  handleAddSmurf = () => {
    const newSmurf = { name: this.state.name, age: this.state.age, height: this.state.height };
    this.props.addSmurf(newSmurf);
    this.setState({ name: "", age: "", height: "" });
  }

  newSmurfForm = () => {
    return (
      <div>
        <input 
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <input 
          type="text"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <input 
          type="text"
          placeholder="height"
          name="height"
          value={this.state.height}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <button onClick={() => this.handleAddSmurf()}>add</button>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.newSmurfForm()}
        {this.props.smurfs.map((smurf, index) => (
          <ul key={smurf+index}>
            <div>{smurf.name}</div>
            <div>age: {smurf.age}</div>
            <div>height: {smurf.height}</div>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);