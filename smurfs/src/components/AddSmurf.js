import React from 'react';

class AddSmurf extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: 0,
        height: ''
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log('submit pressed');
    this.props.addSmurf(this.state);
  };

  render() {
    return (
      <div>
        <h3>Add New Smurf</h3>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
          />
          <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Email"
          />
          <button className="md-button form-button">
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

export default AddSmurf;
