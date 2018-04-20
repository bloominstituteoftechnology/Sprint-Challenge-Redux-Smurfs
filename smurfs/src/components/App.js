import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf, removeSmurf } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <div className="header"><img src="https://vignette.wikia.nocookie.net/smurfs/images/b/bd/Papa_Smurf123.png/revision/latest?cb=20130805130238" alt="Papa Smurf"></img>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/The_Smurfs_logo.svg/1200px-The_Smurfs_logo.svg.png" alt="Smurf Logo"></img>
        <img src="https://vignette.wikia.nocookie.net/smurfs/images/6/6b/Smurfette_posing.png/revision/latest?cb=20151220174958" alt="Smurfette"></img></div>
      <div className="mainForm">
      <h2>Go on, add another Smurf:</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input"
          value={this.state.name}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="number"
          placeholder=" Age"
          name="age"
          className="input"
          value={this.state.age}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Height"
          name="height"
          className="input"
          value={this.state.height}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        
        <button className="button"
          onClick={() => {
            this.props.addSmurf({ name: this.state.name, age: this.state.age, height: this.state.height });
            this.setState({ name: '', age: '', height: '' });
          }}
        >
        Add Smurf
        </button>
        </div>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        
        <div className="mainList">
          {this.props.smurfs.map(smurf => <li key={smurf.id} className="smurfList">
                                              <div className="container">
                                              <div className="smurfName"><h2>{smurf.name}</h2></div>
                                              <div className="smurfInfo">
                                                <div className="age">{smurf.age}</div>
                                                <div className="email">{smurf.height}</div>
                                                <button className="button" 
                                                  onClick={() => {
                                                    this.props.removeSmurf(smurf.id);}}>Delete</button>
                                              </div>
                                              </div>
                                            </li>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, removeSmurf })(App);
