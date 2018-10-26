import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import  { addSmurf, getSmurfs } from '../actions';
import SmurfList from './SmurfList';
import SmurfAdd from './SmurfAdd';
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
        height: '',
    }
  }

componentDidMount() {
  this.props.getSmurfs();
}

changeHandler = (ev) => {
  this.setState({[ev.target.name]: ev.target.value})
}

postSmurf = (ev) => {
  ev.preventDefault();
  this.props.addSmurf(this.state.name, this.state.age, this.state.height);
}

  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs}/>
        <SmurfAdd changeHandler={this.changeHandler} postSmurf={this.postSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   smurfs: state.smurfs,
   fetchingSmurfs: state.fetchingSmurfs,
   addingSmurf: state.addingSmurf,
   updatingSmurf: state.updatingSmurf,
   deletingSmurf: state.deletingSmurf,
   error: state.error
  }
}


export default connect (mapStateToProps, { addSmurf, getSmurfs})(App)

