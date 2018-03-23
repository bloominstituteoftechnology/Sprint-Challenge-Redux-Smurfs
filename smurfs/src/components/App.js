import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { initSmurf, addSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {

  componentDidMount(){
    this.props.initSmurf()
    // this.props.addSmurf()

  }

  state = {
    name: '',
    age: '',
    height: ''
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddSmurf = event => {
    const { name, age, height } = this.state;
    this.props.smurfs.push({name, age, height});
    this.setState({name: '', age: '', height: ''})
    setTimeout(() => {
      this.props.initSmurf();
    }, 20);
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div className = "Smurfs_Section">
        {this.props.smurfs.map(smurf => {
          return(
          <div className='Smurfs__List' key={smurf.id}>
            <div>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
            <div>{smurf.id}</div>
          </div>
          )
        })}
        </div>
        <form>
          <input 
          value={this.state.name}
          name="name"
          type="text"
          placeholder='Smurf'
          onChange={this.handleInputChange}
          />
          <input
          value={this.state.age}
          name="age"
          type="text"
          placeholder="age"
          onChange={this.handleInputChange}
          />
          <input
          value={this.state.height}
          name="height"
          type="text"
          placeholder="height"
          onChange={this.handleInputChange}
          />
          </form>
          <button onClick={this.handleAddSmurf}>Smurf!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfing: state.smurfing,
    smurfs: state.smurfs,
    error: state.errorMessage
  }
}

export default connect(mapStateToProps, { initSmurf })(App);
