import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  
  handleInputChange = event => {
  this.setState({[event.target.name]: event.target.value})
  }

  submitInputChange = () => {
    const smurfInfo = this.state;
    this.props.addSmurf(smurfInfo);
    this.setState({name: '', age: '', height: ''})
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <p key={smurf.id}>{smurf.name}</p>
            )
          })}
        </div>

        <div>
          <input 
          name="name" 
          placeholder="Name" 
          value={this.state.name} 
          onChange={this.handleInputChange} 
          type="text"
          />
          <input 
          name="age" 
          placeholder="Age" 
          value={this.state.age} 
          onChange={this.handleInputChange} 
          type="text"
          />
          <input 
          name="height" 
          placeholder="Height" 
          value={this.state.height} 
          onChange={this.handleInputChange} 
          type="text"
          />
          <button onClick={this.submitInputChange}>Submit</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error,
  };
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
