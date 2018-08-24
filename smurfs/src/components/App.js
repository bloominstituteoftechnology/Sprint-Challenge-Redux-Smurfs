import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
import './App.css';
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
    height: '',
  };

  componentDidMount() {
    this.props.getSmurfs();
  };

  changeHandler = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }

  render() {

    const { name, age, height } = this.state;
    const { addSmurf, fetchingSmurfs, smurfs } = this.props;

    return (
      <div className="App">
        <input 
          type="text" 
          placeholder='name'
          name='name'
          value={name}
          onChange={this.changeHandler}
        />
        <input 
          type="number"
          placeholder='age'
          name='age'
          value={age}
          onChange={this.changeHandler}
        />
        <input 
          type="text"
          placeholder='height'
          name='height'
          value={height}
          onChange={this.changeHandler}
        />
        <button
          onClick = {() => addSmurf({ name, age, height })}>Add Smurf</button>
        
        {
          !fetchingSmurfs && smurfs.length ?
            <ul>
              {smurfs.map(smurf => (
                <li>
                  <h2>{smurf.name}</h2>
                  <h4>{smurf.age}</h4>
                  <h4>{smurf.height}</h4>
                </li>
              ))}
            </ul>:
            null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error,
})

export default connect(mapStateToProps, { addSmurf, getSmurfs })(App);
