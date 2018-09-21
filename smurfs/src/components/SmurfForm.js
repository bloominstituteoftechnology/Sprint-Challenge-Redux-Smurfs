import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        smurf:{
                id: '',
                name: '',
                age: '',
                height: ''
                },
      isUpdate: false
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.state.name && this.state.age && this.state.height){
      if (!this.state.isUpdate){
          axios .post('http://localhost:3333/smurfs', 
                    { id: this.props.smurfs.length,
                      name: this.state.smurf.name,
                      age: this.state.smurfage,
                      height: this.state.smurf.height })
                .then(response => {this.props.handleCreateOrUpdate })
                .catch(err => console.log(err));
      } else{
          axios .put(`http://localhost:5000s/${this.state.id}`, 
                  { id: this.state.smurf.id,
                    name: this.state.smurf.name,
                    age: this.state.smurf.age,
                    height: this.state.smurf.height })
                .then(response => {
                  this.props.handleCreateOrUpdate
                  this.setState({ isUpdate: false}); })
                .catch(err => console.log(err));
      }
      this.props.componentDidMount();
      this.setState({
        smurf: {id: '',
                name: '',
                age: '',
                height: ''
                }
      });
    }
  }

  handleInputChange = e => {
    this.setState({ smurf:{[e.target.name]: e.target.value }});
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit" onClick={()=>this.props.handleCreateOrUpdate(this.state.smurf, this.state.isUpdate)}>Add to the village</button>
          {console.log(this.state.smurf)}
        </form>
      </div>
    );
  }
}

export default SmurfForm;
