import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';
import AddSmurfForm from './AddSmurfForm';
import UpdateSmurfForm from './UpdateSmurfForm';

class App extends Component {
  constructor() {
    super();

    this.state ={
      isHidden: true
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  updateClick = () => {
    this.setState({isHidden: !this.state.isHidden})
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Smurfs 2.0 w/ Redux</h1>
          <ul>
          {this.props.smurfs.map(smurf => <li key={smurf.id}> Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height} cm&nbsp;
          <button onClick={this.updateClick}>Update</button>
          <UpdateSmurfForm id={smurf.id} hidden={this.state.isHidden} />
          <button onClick={() => {this.props.deleteSmurf(smurf.id); this.forceUpdate();}}>Delete</button>
          <hr/>
          </li>)}
          </ul>
          <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(App);
