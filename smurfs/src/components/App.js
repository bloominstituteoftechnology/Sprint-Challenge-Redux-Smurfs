import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSmurfAction } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: '',
      }
    }
  }
  
  addSmurf = (event) => {
    event.preventDefault();
    this.props.addSmurfAction(newSmurf);
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateAge = (event) => {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight = (event) => {
    this.setState({
      height: event.target.value
    });
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">ADD NEW SMURF</button>
        </form>

        <div>
          {this.props.smurfs.map(smurf => {
            return <Smurflist smurf={smurf} key={smurf.id} />
          })}
        </div>

      </div>
    );
  }
}

export default App;
