import React, { Component } from 'react';
import {getSmurfs} from './../actions/index'
import {creatingSmurf}from './../actions/index'
import {smurfReducer} from './../reducers/index'
import { connect } from 'react-redux';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name:'',
    age:'',
    height:'',
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = _ => {
    const { name, age, height } = this.state;
    this.props.creatingSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };
  componentDidMount() {
    console.log (getSmurfs())
    this.props.getSmurfs();
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`Smurfaholics`}</h1>
        </header>
        {this.props.error ? <h3>Error Fetching Smurfs</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingSmurfs ? (
            <h3>Hunting Smurfs</h3>
          ) : (
            this.props.smurfs
          )}
        </div>
      
          <form className="Column-Layout">
          <input
            className="input"
            value={this.state.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            value={this.state.age}
            name="age"
            type="text"
            placeholder="Age"
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            value={this.state.height}
            name="height"
            type="text"
            placeholder="Height"
            onChange={this.handleInputChange}
          />
          <button onClick={() => this.handleAddSmurf()} type="button">
            Add New Smurf
          </button>
        </form>
        </div>
    );
  }
}
const mapStateToProps = smurfReducer => {
  
  return {
    smurfs: smurfReducer.smurfs,
    error: smurfReducer.error,
    gettingSmurfs: smurfReducer.gettingSmurfs
    // creatingSmurf: smurfReducer.creatingSmurfSmurf
  };
};
export default connect(mapStateToProps, { getSmurfs })(App);