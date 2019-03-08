import React, { Component } from 'react';
import SmurfsList from './SmurfsList';
import './App.css';
import {connect} from "react-redux";
import {getSmurfs, addSmurf} from "../actions"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
    
  state= {
    smurf: {
      name: "",
      age: "",
      height: "",
    }
  }
  
  componentDidMount() {
    this.props.getSmurfs();
}

  handleChanges = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10)
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
        }
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: "",
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {/* <SmurfsList/> */}
        {this.props.smurfs.map(smurf => {
          return (
              <div key={smurf.id} >
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            )
        })}
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.smurf.name}
            name="name"
            placeholder="Smurf Name"
            onChange={this.handleChanges}
          />
          <input 
            type="number"
            value={this.state.smurf.age}
            name="age"
            placeholder="Age"
            onChange={this.handleChanges}
          />
          <input 
            type="text"
            value={this.state.smurf.height}
            name="height"
            placeholder="Height"
            onChange={this.handleChanges}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App);;
