import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from '../actions';
import { Smurf } from './Smurf';

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
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height:''
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-intro">Smurf's Up!</h1>
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} updateSmurf={this.props.updateSmurf} deleteSmurf={this.props.deleteSmurf}/>
        })}
        <form className="AddSmurf" onSubmit={() => this.handleSubmit()}>
          <input name="name" placeholder="Name" onChange={this.handleChange.bind(this)}/>
          <input name="age" placeholder="Age" onChange={this.handleChange.bind(this)}/>
          <input name="height" placeholder="Height" onChange={this.handleChange.bind(this)}/>
          <button value="Submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps, { getSmurfs, addSmurf, updateSmurf, deleteSmurf })(App);
