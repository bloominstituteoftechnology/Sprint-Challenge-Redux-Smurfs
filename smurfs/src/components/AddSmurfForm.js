import React from "react";
import {connect} from "react-redux"
import {addSmurf} from "../actions"

class AddSmurf extends React.Component {
   constructor(){
      super()
      this.state = {
         name: "",
         age: 0,
         height: "",
      }
   }
   
   componentDidMount(){
      //I'm not exactly sure how to update and delete without using match.params and I'm hungry, so I'll stop with the basic goals at 1:59
   }
   inputHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
   }

   submitHandler = (e) => {
      e.preventDefault()
      this.props.addSmurf(this.state)
      this.setState({
         name: "",
         age: 0,
         height: "",
      })
   }
   render(){
      return(
         <form onSubmit={this.submitHandler}>
            <input
               placeholder="name"
               name="name"
               value={this.state.name}
               onChange={this.inputHandler}
            >
            </input>
            <input
               placeholder="age"
               name="age"
               value={this.state.age}
               onChange={this.inputHandler}
            >
            </input>
            <input
               placeholder="height (2cm)"
               name="height"
               value={this.state.height}
               onChange={this.inputHandler}
            >
            </input>
            <button type="submit">Submit</button>
         </form>
      )
   }
}

const mapState = state => {
   return {}
}

export default connect(mapState, {addSmurf})(AddSmurf)