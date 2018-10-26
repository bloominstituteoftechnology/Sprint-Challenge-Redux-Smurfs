import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
      name: '',
      age: '',
      height: ''
      
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInputChange = event => {
    this.setState({
      
        [event.target.name]: event.target.value
      
    });
  };

  handleAdd = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={event => this.handleAdd(event)}>
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
          <button type="submit">Add to the village</button>
        </form>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <h1>{smurf.name}</h1>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf
  }
}

export default connect(mapStateToProps, {
  getSmurfs,
  addSmurf
})(App);
