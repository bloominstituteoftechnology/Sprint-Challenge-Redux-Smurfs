import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I connect my components to redux?`
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

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({name: '', age: '', height: ''});
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Smurf name..."
                 value={this.state.name} onChange={this.handleChange} />
          <input type="text" name="age" placeholder="Smurf age..."
                 value={this.state.age} onChange={this.handleChange} />
          <input type="text" name="height" placeholder="Smurf height..."
                 value={this.state.height} onChange={this.handleChange} />
          <button type="Submit">Add Smurf</button>
        </form>
        <div>
          { this.props.fetchingSmurfs ?
            <h3>FETCHING SMURFS DATA...</h3> :
            <ul>
            { this.props.smurfs.map((smurf, index) => (
              <li key={index}>{ smurf.name }</li>
            ))}
            </ul>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
