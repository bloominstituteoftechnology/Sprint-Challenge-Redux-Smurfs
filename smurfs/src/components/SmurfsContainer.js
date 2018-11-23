import React from 'react'
import Smurf from './Smurf'

class SmurfsContainer extends React.Component {
 constructor(){
  super()
  this.state = {

  }
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

    />)}
   </div>
  )
 }
}

export default SmurfsContainer