import React, { Component } from 'react';
import { connect } from 'react-redux';



class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    
  };

  render() {
    const { smurf } = this.props;
    return (
      <div>
        <div>{smurf.name}</div>
        <div>{smurf.age}</div>
        <div>{smurf.height}</div>
       
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Smurf);