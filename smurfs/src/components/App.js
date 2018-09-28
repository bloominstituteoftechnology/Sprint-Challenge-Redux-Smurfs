import React, { Component, div } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions/index';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    age: 0,
    name: '',
    height: '',
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    const { name, age, height } = this.state
    const { addSmurf, smurfs } = this.props; 


    return (
      <div className="App">
        <h1>Smurf List Maker</h1>
        <div>
          <input name="name" type="text" placeholder="text" value={this.state.name} onChange={this.handleChange} /> <br />
          <input name="age" type="text" placeholder="age" value={this.state.age} onChange={this.handleChange} /> <br />
          <input name="height" type="text" placeholder="height" value={this.state.height} onChange={this.handleChange} /> <br />
          <button onClick={() => addSmurf({name, age, height})}> Add Smurf </button>
        </div>

        <div className="smurfContainer">
          {smurfs.map(smurf => (
            <div key={smurf.name} className="eachSmurf">
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
})




export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
