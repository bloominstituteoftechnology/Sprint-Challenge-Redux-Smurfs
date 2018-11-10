import React, {Component} from 'react'

class NewSmurfForm extends Component {

    constructor () {
      super();
  
      this.state = {
  
        name: '',
        age: '',
        height: '',
      }
    }

    inputHandler = (event) => {
        let value = event.target.value;
        let property = event.target.dataset.property;
        console.log(property)
        this.setState({
                [property]: value,
        })
    }
    render() {
        console.log(this.state.email)
      return (
        <div className="App">
        <h2>New Smurf Citizen Registration</h2>
        <form>
            <p>Name: <input onChange={this.inputHandler} value={this.state.name} data-property='name' type='text'></input></p>
            <p>Age:  <input onChange={this.inputHandler} value={this.state.age} data-property='age' type='text'></input></p>
            <p>Height: <input onChange={this.inputHandler} value={this.state.height} data-property='height' type='text'></input></p>
        </form>
        </div>
      );
    }
  }

  export default NewSmurfForm