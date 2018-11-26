import React from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux'
import { addSmurf, deleteSmurf } from '../actions/index'

class SmurfsContainer extends React.Component {
 constructor(){
  super()
  this.state = {
   name: '',
   height: '',
   age: ''
  }
 }

 inputHandler = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 submitHandler = event => {
  event.preventDefault()
  this.props.addSmurf({name: this.state.name, height: this.state.height, age: this.state.age})

 }

 deleteHandler = (id) => {
  this.props.deleteSmurf(id)
 }
 render(){
  return(
   <div>
 <form onSubmit={this.submitHandler}>
   <input
   onChange={this.inputHandler}
   type="text"
   name="name"
   value={this.state.name}
   />
   <input
   onChange={this.inputHandler}
   type="text"
   name="age"
   value={this.state.age}
   />
   <input
   onChange={this.inputHandler}
   type="text"
   name="height"
   value={this.state.height}
   />
   <button>Add Smurf</button>
  </form>
    {this.props.smurfs.map((smurf, index) => <Smurf
     key={index}
     smurf={smurf.smurf}
     index={smurf.index}
     name={smurf.name}
     height={smurf.height}
     id={smurf.id}
     age={smurf.age}
     deleteHandler={this.deleteHandler}
    />)}
   </div>
  )
 }
}

const mapStateToProps = state => {
 const { smurfs } = state
 return {
  smurfs: smurfs
 }
}

export default connect(mapStateToProps, { addSmurf, deleteSmurf })(SmurfsContainer)