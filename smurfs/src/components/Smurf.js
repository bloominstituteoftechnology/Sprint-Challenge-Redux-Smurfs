import React from 'react'
import { updateSmurf } from '../actions/index'
import { connect } from 'react-redux'

class Smurf extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
    newname: '',
    newage: '',
    newheight: ''
   }
 }

 updateHandler = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 submitSmurf = (id, obj) => {
  this.props.updateSmurf(id, obj)
 }
  render() {
    return (
     <div>
     <h1>{this.props.name}</h1> 
     <h3>{this.props.height}</h3> 
     <h4>{this.props.age}</h4>
     <form onSubmit={() => this.props.deleteHandler(this.props.id)}>
      <input type='text'
       name="newname"
       value={this.state.newname}
       onChange={this.updateHandler}
      />
      <input type='text'
       name="newage"
       value={this.state.newage}

       onChange={this.updateHandler}      />
      <input type='text'
       name="newheight"
       value={this.state.newemail}
       onChange={this.updateHandler}
      />  
      <button>Delete Smurf</button>

     </form>
     <button onClick={() => this.submitSmurf(this.props.id,
      {name: this.state.newname, age: this.state.newage, height: this.state.newheight}
     )}>
      Update Smurf
     </button>
   
    </div>
    )
  }
}



export default connect('', { updateSmurf })(Smurf)