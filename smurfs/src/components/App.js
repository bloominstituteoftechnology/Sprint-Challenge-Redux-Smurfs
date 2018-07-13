import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state ={
    name: '',
    age: '',
    email: ''
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  addHandler = () => {
    const {name, age, height} = this.state;
    this.props.addSmurf({name, age, height});
    this.setState({ name: '', age: '', height: ''});
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <input
          className="input"
          value={this.state.name}
          onChange={this.inputHandler}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          className="input"
          value={this.state.age}
          onChange={this.inputHandler}
          name="age"
          type="text"
          placeholder="age"
        />
        <input
          className="input"
          value={this.state.height}
          onChange={this.inputHandler}
          name="height"
          type="text"
          placeholder="height"
        />
        <button onClick={() => this.addHandler()} type="button"> Add Smurf </button>
        <div> Smurfs: </div>
        {this.props.smurfs.map(smurf => {
              return <div key={smurf.id}>{smurf.name} Age: {smurf.age} Height: {smurf.height} </div>;
            })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf }) (App);
