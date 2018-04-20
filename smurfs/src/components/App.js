import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {fetch_smurf, post_smurf, delete_smurf} from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.value);
    return e.target.value;
  }
  render() {
    console.log('redner', this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
                <div className="addForm">
                    <h2>Add a new friend</h2>
                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Name" name="name"/>
                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Age" name="age"/>
                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Height" name="height"/>
                <button className="button" onClick={() =>
                this.props.post_smurf({ name: this.state.name, age: this.state.age, height: this.state.height}) }>Add</button>
                </div>
                <div>
                  {this.props.fetching ? (
                    <h1>FETCHING</h1>
                  ) : (
                    <div>
                      <ul className = "card">
                        {this.props.smurfs.map(smurf => {
                          return (
                            <div key={smurf.name}>
                              <li className="list">{smurf.name}</li >
                              <button className="button-delete" onClick={() =>
                              this.props.delete_smurf(smurf.id)}>Delete Me</button>
                            </div>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
            </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('app', state)
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    smurfs: state.smurfs,
    posting: state.posting
  }
}

export default connect(mapStateToProps, {
  fetch_smurf, post_smurf, delete_smurf
})(App);
