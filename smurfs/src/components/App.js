import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { 
  fetchSmurfs, addSmurf, deleteSmurf, updateSmurf,
  updateName, updateAge, updateHeight, resetInput
} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      updateID: ""
    };
  }

  componentDidMount() { 
    this.props.fetchSmurfs() 
  }

  handleAddSmurf = () => {
    this.props.addSmurf(this.props.smurf);
    this.props.resetInput();
  }

  newSmurfForm = () => {
    return (
      <div>
        <input 
          type="text"
          placeholder="name"
          name="name"
          value={this.props.smurf.name}
          onChange={event => this.props.updateName(event.target.value)}
        />
        <input 
          type="text"
          placeholder="age"
          name="age"
          value={this.props.smurf.age}
          onChange={event => this.props.updateAge(event.target.value)}
        />
        <input 
          type="text"
          placeholder="height"
          name="height"
          value={this.props.smurf.height}
          onChange={event => this.props.updateHeight(event.target.value)}
        />
        <button onClick={() => this.handleAddSmurf()}>add</button>
      </div>
    )
  }

  handleUpdate = smurf => {
    const updatedSmurf = {
      name: this.props.smurf.name !== "" ? this.props.smurf.name : smurf.name,
      age: this.props.smurf.age !== "" ? this.props.smurf.age : smurf.age,
      height: this.props.smurf.height !== "" ? this.props.smurf.height : smurf.height,
      id: smurf.id
    }
    this.props.updateSmurf(updatedSmurf, smurf.id);
    this.props.resetInput();
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
                  value={this.props.smurf.name}
                  onChange={event => this.props.updateName(event.target.value)}
                />
                <input 
                  type="text"
                  placeholder="age"
                  name="age"
                  value={this.props.smurf.age}
                  onChange={event => this.props.updateAge(event.target.value)}
                />
                <input 
                  type="text"
                  placeholder="height"
                  name="height"
                  value={this.props.smurf.height}
                  onChange={event => this.props.updateHeight(event.target.value)}
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
    smurfs: state.crud.smurfs,
    smurf: state.input
  }
}

export default connect(mapStateToProps, { 
  fetchSmurfs, 
  addSmurf, 
  deleteSmurf, 
  updateSmurf,
  updateName,
  updateAge,
  updateHeight,
  resetInput
})(App);