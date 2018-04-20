import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      update: false,
      updateID: ""
    };
  }

  componentDidMount() { this.props.fetchSmurfs() }

  handleAddSmurf = () => {
    const newSmurf = { name: this.state.name, age: this.state.age, height: this.state.height };
    this.props.addSmurf(newSmurf);
    this.setState({ name: "", age: "", height: "" });
  }

  handleUpdate = smurf => {
    const updatedSmurf = {
      name: this.state.name !== "" ? this.state.name : smurf.name,
      age: this.state.age !== "" ? this.state.age : smurf.age,
      height: this.state.height !== "" ? this.state.height : smurf.height,
      id: smurf.id
    }
    this.props.updateSmurf(updatedSmurf, smurf.id);
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
        {this.props.smurfs.map(smurf => (
          <ul key={smurf.id}>
            <div>{smurf.name}</div>
            <div>age: {smurf.age}</div>
            <div>height: {smurf.height}</div>
            <div>
              <button onClick={() => this.props.deleteSmurf(smurf.id)}>delete</button>
              <button onClick={() => this.setState({ update: true, updateID: smurf.id })}>update</button>
            </div>
            {this.state.update && this.state.updateID === smurf.id ? (
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
                <button onClick={() => this.handleUpdate(smurf)}>update</button>
              </div>
            ) : null}
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

export default connect(mapStateToProps, { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf })(App);