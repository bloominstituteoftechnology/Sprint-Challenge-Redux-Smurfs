import React, { Component } from 'react';

class CreateSmurfForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    // componentDidUpdate(prevprops, prevstate){

    changeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      submitHandler = ev => {
          let newSmurf = {...this.state, age: parseInt(this.state.age)}
          ev.preventDefault();
          this.props.addSmurf(newSmurf)
          
          this.setState({
            name: '',
            age: '',
            email: ''
          })
      }
  
    render() {
      console.log()
      return (
        
         <form onSubmit={this.submitHandler}>
            <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
          />
            <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="height"
            value={this.state.height}
            placeholder="height"
          />
          <button>add smurf</button>
             
         </form>
        
      );
    }
  }
  
export default CreateSmurfForm;