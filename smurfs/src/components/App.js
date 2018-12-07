import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addANewSmurf, getTheSmurfs } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.getTheSmurfs();
  }


  submitHandler = e => {
  e.preventDefault ();
  this.props.addANewSmurf(this.state);
  this.setState ({ name: '', age: '', height: '', });
  };
  
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value});
  };



  render() {
    return (
      <div className="App">
          <header>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your Redux version of Smurfs!</div>
            <div>Have fun!</div>
          </header>
        
        <div className="formDiv">
          <form onSubmit={this.submitHandler}>
            <input className="formValues" onChange={this.changeHandler} value={this.state.name} type="text" name="name" placeholder="Enter A Smuffy name Here" ></input>
            <input className="formValues" onChange={this.changeHandler} value={this.state.age} type="number" name="age" placeholder="Smuffy age?"></input>
            <input className="formValues" onChange={this.changeHandler} value={this.state.height} type="text" name="height" placeholder="How Tall Is This Smurf?" ></input>
            <button className="formValues" type="submit">Press Enter To Add This Smurf To The Village!</button>
          </form>
        
        
        </div>

        <div className="SmurfVillageBox">

          {this.props.smurfs.map((eachSmurf, i) => {
            return (
              <div key={i}><h3>Smurffy Name:</h3>
                <h1>{eachSmurf.name}</h1>
                <h4>Smurffy Age: {eachSmurf.age} </h4>
                <h4>Smurffy Height: {eachSmurf.height}</h4></div>);
          })}

        </div>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => {
  console.log(state);
  console.log(state.smurfs);
  console.log(state.loading);
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading,
  }
};

export default connect(mapStateToProps,{addANewSmurf, getTheSmurfs})(App);
