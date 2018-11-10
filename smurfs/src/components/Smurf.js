import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.css'
class Smurf extends Component {
    render() {
      return (
        <div className="smurf">
          <h2> {this.props.name} </h2>
          <h4> {this.props.age} smurf years </h4>
          <h4> {this.props.height} inches </h4>
        </div>
      );
    }
  }
  
  export default Smurf;