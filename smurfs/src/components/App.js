import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, createSmurf, terminateSmurf, editSmurf } from '../actions';
import { connect } from 'react-redux';
import AddSmurf from './AddSmurfs';
import $ from 'jquery';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleEditSmurf = e => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props)
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Smurf Village</h1>
      </header>
      <div>
        <AddSmurf />
      </div>
      <div className="smurf-container">
        {this.props.smurfs.map(smurf => {
          return (
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div key={smurf.name} className="smurf-card front">
                  <ul>
                    <li><span className="title" >Name:</span> {smurf.name}</li>
                    <li><span className="title" >Age:</span> {smurf.age}</li>
                    <li><span className="title" >Height:</span> {smurf.height}</li>
                  </ul>
                </div>
                <div className="smurf-card back">
                  <div className="edit-form">
                    <input onChange={this.handleEditSmurf} value={this.state.name} name='name' placeholder={smurf.name} />
                    <input onChange={this.handleEditSmurf} value={this.state.age} name='age' placeholder={smurf.age} />
                    <input onChange={this.handleEditSmurf} value={this.state.height} name='height' placeholder={smurf.height} />
                    <button onClick={() => this.props.editSmurf(smurf.id, this.state)}
                    >Edit Smurf
                    </button>
                    <button className="remove-button" onClick={() => this.props.terminateSmurf(smurf.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  }
}

export default connect(mapStateToProps, { fetchSmurfs, createSmurf, terminateSmurf, editSmurf })(App);
