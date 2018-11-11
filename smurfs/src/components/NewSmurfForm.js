import React, {Component} from 'react'
import {connect} from 'react-redux'

import {newSmurf} from '../actions'

class NewSmurfForm extends Component {

    constructor (props) {
      super(props);
  
      this.state = {
  
        name: '',
        age: '',
        height: '',
      }
    }

    inputHandler = (event) => {
        let value = event.target.value;
        let property = event.target.dataset.property;
        this.setState({
                [property]: value,
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(event)

        this.props.newSmurf(this.state)
        this.setState({name: '', age: '',height: '',})
    }

    render() {
      return (
        <div className="form">
        <h2>New Smurf Citizen Registration</h2>
        <form>
            <p>Name: <input onChange={this.inputHandler} value={this.state.name} data-property='name' type='text'></input></p>
            <p>Age:  <input onChange={this.inputHandler} value={this.state.age} data-property='age' type='text'></input></p>
            <p>Height: <input onChange={this.inputHandler} value={this.state.height} data-property='height' type='text'></input></p>
            <button onClick={this.submitHandler}> Register </button>
        </form>
        </div>
      );
    }
  }

  const mapStateToProps = state => {

    return {}
}

  export default connect(mapStateToProps, {newSmurf}) (NewSmurfForm)