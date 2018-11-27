import React, { Component } from 'react';

import { addSmurf } from '../actions'
import { connect } from 'react-redux';


class SmurfForm extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      addSmurf = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }


      render() {
          return(
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
          )
      }
}

const mapStateToProps = () => ({});


export default connect(mapStateToProps, { addSmurf })(SmurfForm);