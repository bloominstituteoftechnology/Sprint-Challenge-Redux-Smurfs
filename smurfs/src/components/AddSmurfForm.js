import React from "react";

class AddSmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleChange = event => {
    console.log("INPUT FORM EVENT: ", event);
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  // TODO: finsh handle submit
  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    return (
      <form className="form-group">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default AddSmurfForm;
