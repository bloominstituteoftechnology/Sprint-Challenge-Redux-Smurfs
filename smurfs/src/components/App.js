import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, createSmurf } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: ''
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input 
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={e => this.setState({ [e.target.name]: e.target.value})}
        />
        <input 
          type="text"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          type="text"
          placeholder="height"
          name="height"
          value={this.state.height}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button 
          onClick={() => {
            this.props.createSmurf({name: this.state.name, age: this.state.age, height: this.state.height })
            this.setState({name: '', age: '', height: ''})
          }}
        >
          Add Smurf
        </button>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null }
        <ul>
          {this.props.smurfs.map(smurf => <li key={smurf.id}>
          {smurf.name}
          <div>
            {smurf.age}
          </div>
          <div>
            {smurf.height} in cm
          </div>
          </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    erro: state.error,
    pending: state.pending
    
  };
};

export default connect(mapStateToProps, {fetchSmurfs, createSmurf})(App);
