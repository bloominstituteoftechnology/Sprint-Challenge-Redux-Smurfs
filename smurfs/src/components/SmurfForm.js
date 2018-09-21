import React, { Component } from 'react';
import axios from 'axios';
import { saveSmurf } from '../actions'
import { connect } from 'react-redux'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  addSmurf = event => {
    event.preventDefault();
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    this.props.saveSmurf(newSmurf)

    // axios
    // .post('http://localhost:3333/smurfs', newSmurf)
    // .then(reponse => {
    //     console.log('addsmurf firing')
    //     console.log(this.props);
    //     this.props.refreshSite}
    // )
    // .catch(error => console.error('SmurfForm Error', error))
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log()
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    smurfsFetched: state.smurfsFetched,
    smurfs: state.smurfs
  }
}

export default connect(mapStatetoProps,
  {saveSmurf})
  (SmurfForm)
