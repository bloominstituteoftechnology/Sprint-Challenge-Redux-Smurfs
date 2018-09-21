import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { fetchSmurfs, addSmurf } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleInput = event => {
    event.preventDefault();
     if(event.target.name === 'age') {
      this.setState({
      age: Number(event.target.value)
      })}
    else if (event.target.name === 'name'){
      this.setState({
          name: event.target.value
    })} else {
          this.setState({
              height: event.target.value
    })}
  }

   submitSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
    return (
      <div className = 'app'>
        {this.props.fetchingSmurfs ? (
          <h3>Just a moment!</h3>
        ) : (
          <div>
            {this.props.smurfs.map(smurf =>
              <div key = {smurf.name}>
                <h2>Smurf Information</h2>
                <h3>Name: {smurf.name}</h3>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
              </div>
            )}
            <div>
                <h3>Add a Smurf!</h3>
                <form>
                    <input type = 'text' name = 'name' placeholder = 'Name' onChange = {this.handleInput}/>
                    <input type = 'text' name = 'age' placeholder = 'Age' onChange = {this.handleInput}/>
                    <input type = 'text' name = 'height' placeholder = 'Height' onChange = {this.handleInput}/>
                    <input type = 'submit' onClick = {this.submitSmurf} />
                </form>
            </div>
          </div>
        )}
      </div>
    );
  };
};

const mapStateToProps = (state, action) => ({}) /* placeholder */
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
