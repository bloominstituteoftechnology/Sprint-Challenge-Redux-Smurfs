import React, {Component} from 'react'
import {connect} from 'react-redux'
import {smurfGone} from "../actions"
import UpdateSmurfForm from './UpdateSmurfForm'
import './App.css'
class Smurf extends Component {
    constructor (props) {
        super(props);
      }
  
      deleteHandler = () => {
          console.log(this.props.ID)
            this.props.smurfGone(this.props.ID)
      }
    render() {
        let C = <button>Update</button>
      return (
        <div className="smurf">
            <h1 className="button" onClick={this.deleteHandler}> ø </h1>
          <h2> {this.props.name} </h2>
          <h4> {this.props.age} smurf years old </h4>
          <h4> {this.props.height} inches tall </h4>
          <div>{C}</div>
        </div>
      );
    }
  }
  
  const mapStateToProps = () => ({})
  export default connect(mapStateToProps, { smurfGone })(Smurf)