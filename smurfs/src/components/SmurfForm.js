import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount(){
    console.log(this.props);
    if(this.props.mode === "editing"){
      this.setState({ name: this.props.name, age: this.props.age, height: this.props.height });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.props.mode === "adding"){
      const newSmurf = {
        name: this.state.name,
        age: Number(this.state.age),
        height: this.state.height,
      }
      this.props.addSmurf(newSmurf);
      this.setState({name: '', age: '', height: ''});
    }
    if(this.props.mode==="editing"){
      const updatedSmurf = {
        name: this.state.name,
        age: Number(this.state.age),
        height: this.state.height,
        id: this.props.id
      }
      this.props.update(updatedSmurf);
    }
  }

  handleCancel = event => {
    event.preventDefault();
    this.props.cancel();
  }

  render(){
    return(
      <div className="smurf-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name" />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="name"
            id="name"
            value={this.state.name}
            name="name"
          />
          <label htmlFor="age" />
          <input
            type="number"
            onChange={this.handleChange}
            placeholder="age"
            id="age"
            value={this.state.age}
            name="age"
          />
          <label htmlFor="height" />
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="height"
            id="height"
            value={this.state.height}
            name="height"
          />
          {this.props.mode==="adding" ? <button type="submit">Add Smurf</button> : null}
          {this.props.mode==="editing" ? (
            <React.Fragment>
              <button type="submit">Update Smurf</button>
              <button onClick={this.handleCancel}>Cancel</button>
            </React.Fragment>
          ) : null}

        </form>
      </div>
    );
  }
}

export default SmurfForm;
