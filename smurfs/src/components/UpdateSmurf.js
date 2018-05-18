import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { updateSmurf } from '../actions';
import { connect } from 'react-redux';

class UpdateSmurf extends Component {
  constructor() {
    super();
    this.state = {
      smurf: {
	name:'',
	age:'',
	height:''
      }
    };
  }

  componentDidMount() {
    this.setState({ smurf: this.props.currentSmurf });
  }

  handleChange = event => {
    this.setState({ smurf: {...this.state.smurf, ...{[event.target.name]: event.target.value}} });
  }

  handleSubmit = smurf => {
    this.props.updateSmurf(smurf);
  }

  render () {
    return (
      <div>
      <Input
	type='text'
	name='name'
	onChange={this.handleChange}
	value={this.state.smurf.name}
	/>
      
      <Input
	type='number'
	name='age'
	onChange={this.handleChange}
	value={this.state.smurf.age}
	/>
      
      <Input
	type='number'
	name='height'
	onChange={this.handleChange}
	value={this.state.smurf.height}
	/>

      <Button onClick= {() => this.handleSubmit(this.state.smurf)}>Update</Button>
      
      </div>
    );
  }
}

export default connect(() => { updateSmurf })(UpdateSmurf);
