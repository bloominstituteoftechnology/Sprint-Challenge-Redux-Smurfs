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

  handleInputChange = event => { this.setState({ [event.target.name]: event.target.value }) }

  addSmurf = () => {
    const smurf = { name: this.state.name };
    this.props.addSmurf(smurf);
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
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.addSmurf()}>add</button>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.newSmurfForm()}
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