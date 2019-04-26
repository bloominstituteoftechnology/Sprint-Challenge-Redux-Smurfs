import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addSmurf, getSmurfs} from '../actions';


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


  changeHandler = ev =>{
    this.setState ({ [ev.target.name]: ev.target.value});

  };

  render() {

      const {name, age, height} = this.state;
      const {addSmurf, fetchingSmurfs, smurfs} = this.props;


    return (

      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>


        <input
          type = 'text'
          placeholder = 'Smurf name'
          name = 'name'
          value = {name}
          onChange = {this.changeHandler}
        />

        <input
          type = 'text'
          placeholder= 'Smurf age'
          name = 'age'
          value = {age}
          onChange = {this.changeHandler}
        />

        <input
          type = 'text'
          placeholder = 'Smurf height'
          name = 'height'
          value = {height}
          onChange = {this.changeHandler}
        />

        <button
          onClick = {() => addSmurf({ name, age, height })}>Add Smurf</button>


        {
          !fetchingSmurfs && smurfs.length ?
            <ul>
              {smurfs.map(smurf => (
                <li key = {smurf.id}>
                  <h4>{smurf.name}</h4>
                  <h5>{smurf.age}</h5>
                  <h5>{smurf.height}</h5>
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
  fetching: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error

});


export default connect(mapStateToProps, {getSmurfs, addSmurf}) (App);
