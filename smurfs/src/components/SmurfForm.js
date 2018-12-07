import React from 'react';

class SmurfForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clearState() {
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }


  render() {
    return (
      <div>
        <h2>Add More Smurfs</h2>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.addSmurf(this.state);
          this.clearState();
          }}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
          />
          <div className="baseline" />
          <input
            onChange={this.changeHandler}
            type="text"
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <div className="baseline" />
          <input
            onChange={this.changeHandler}
            type="text"
            name="height"
            value={this.state.email}
            placeholder="height"
          />
          
          <button className="form-button">
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;