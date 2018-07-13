import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      height: null
    }
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})
  }

  addSmurf = () => {
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(smurf);
  }

  render() {
    return (
      <form className = "new-smurf" onSubmit = {this.addSmurf} >
          <input label = "Name: "
            name = "name"
            placeholder = "Add Smurf"
            onChange = {this.handleChange}/>
          <input label = "Age: "
            name = "age"
            placeholder = "age"
            onChange = {this.handleChange}/>
          <input label = "Height: "
              name = "height"
              placeholder = "cm"
              onChange = {this.handleChange}/>
          <button className = "btn" > Add < /button>
        </form>
    )
  }
}

export default connect(null, {addSmurf})(AddSmurf);
