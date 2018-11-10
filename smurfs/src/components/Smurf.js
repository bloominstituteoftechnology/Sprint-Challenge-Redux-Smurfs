import React, {Component} from 'react'
import {connect} from 'react-redux'

class Smurf extends Component {
    render() {
      return (
        <div className="App">
          <h2> {this.props.name} </h2>
          <p> {this.props.age} </p>
          <p> {this.props.height} </p>
        </div>
      );
    }
  }
  
  export default Smurf;