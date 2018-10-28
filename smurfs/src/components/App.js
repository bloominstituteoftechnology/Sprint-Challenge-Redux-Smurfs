import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/index';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: null,
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, age, height } = this.state;
    const { addSmurf, deleteSmurf, fetchingSmurfs, smurfs } = this.props;

    return (
      <div className="App">
        <input type="text" placeholder="Smurf name" name="name" value={name} onChange={this.handleInput} />
        <input type="number" placeholder="Smurf age" name="age" value={age} onChange={this.handleInput} />
        <input type="text" placeholder="Smurf height" name="height" value={height} onChange={this.handleInput} />
        <button onClick={() => addSmurf({ name, age, height })}>Add Smurf </button>
        {this.props.addingSmurfs ? <h6>... Adding Smurf to the village</h6> : null}
        {fetchingSmurfs ? <h2>Loading...</h2> : null}
        {!fetchingSmurfs && smurfs.length ? (
          <ul>
            {smurfs.map(smurf => (
              <li>
                <h2>{smurf.name}</h2>
                <h4>Age: {smurf.age}</h4>
                <h4>Height: {smurf.height}</h4>
                <button onClick={() => deleteSmurf(smurf.id)}> Delete this Smurf</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
  // addingSmurf: state.addingSmurf,
  // error: state.error
});

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    deleteSmurf,
    addSmurf
  }
)(App);
