import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  };
  
  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (<div>
        Slow your roll... We are fetching Smurfs.
      </div>)
    } else {
      this.props.smurfs.map(smurf => (
        <div>
        <h2>{smurf.name}</h2>
        <h3>{smurf.age}</h3>
        <h3>{smurf.height}</h3>
        </div>
      ))
    };
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input 
          type="text"
          placeholder="Enter Name"
          name="name"
          value={this.state.name} 
          onChange={this.changeHandler}
        />
        <input 
          type="text"
          placeholder="Enter Age"
          name="age"
          value={this.state.age} 
          onChange={this.changeHandler}
        />
        <input 
          type="text"
          placeholder="Enter Height"
          name="height"
          value={this.state.height}
          onChange={this.changeHandler}
        />
        <button onClick={() => this.props.addSmurf(this.state)}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,  //props also? 
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.smurfs
})

export default connect (mapStateToProps, {getSmurfs, addSmurf} )(App);
