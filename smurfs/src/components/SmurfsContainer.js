import React from 'react'
import Smurf from './Smurf'

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
 render(){
  return(
   <div>
    {this.props.smurfs.map((smurf, index) => <Smurf
     key={index}
     smurf={smurf.smurf}
     index={smurf.index}
     name={smurf.name}
     height={smurf.height}
     age={smurf.age}
     inputHandler={this.inputHandler}
     stateName={this.state.name}
     stateHeight={this.state.height}
     stateAge={this.state.age}

    />)}
  
   </div>
  )
 }
}

export default SmurfsContainer