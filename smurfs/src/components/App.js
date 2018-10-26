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
      age: null,
      height: ''
    }
  };
  
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      <div>
        Slow your roll... We're fetching Smurfs.
      </div>
    } else {
      this.props.smurfs.map(smurf => {
        <div>
        <h2>{smurf.name}</h2>
        <h3>{smurf.age}</h3>
        <h3>{smurf.height}</h3>
        </div>
      });
    };
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input 
          type="text"
          name="name"
          //value={this.state.inputChange}
          //onChange={this.changeHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,  //props also? 
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect (mapStateToProps, {getSmurfs, addSmurf} )(App);
