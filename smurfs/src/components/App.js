import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
};

submitSmurf = event => {
    event.preventDefault();
    this.props.addSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
    });
    this.setState({
        name: '',
        age: '',
        height: '',
    });
  }
  render() {
    return (
      <div className="App">
      <ul>
        {this.props.smurfs.map(smurf => {
          return (
          <li>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height} </p>
          </li>
        );
        })}
      </ul>

        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={this.submitSmurf}>
          <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
          <input onChange={this.handleInput} type="number" name="age" placeholder="Age" />
          <input onChange={this.handleInput} type="number" name="height" placeholder="Height" />
          <button type="submit"> Add Smurf </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);