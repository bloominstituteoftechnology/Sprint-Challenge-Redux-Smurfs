import React from "react";

class AddSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      height: "",
      same: false,
      id: 0
    };
  }

  changeHandler = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.exists(); 
      }
    );
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("submit pressed");
    if (this.state.same === true) {
      this.props.editSmurf(this.state.id, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      });
    } else if (this.state.same === false) {
        console.log({
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
          });
      this.props.addSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      });
    }
  };

  exists = () => {
    // console.log(this.props);
    this.props.smurfs.forEach((item, index) => {
      if (
        item.name === this.state.name
      ) {
        console.log(item);
        // this.props.modifyFriend(item.id, this.state);
        console.log("true");
        this.setState({ same: true, id: index });
      } else {
        console.log(item);
        console.log("false");
        this.setState({ same: false });
      }
    });
  };

  render() {
    console.log(this.state);
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
            placeholder="Height"
          />
          <button className="md-button form-button">
            {this.state.same ? "Edit Smurf" : "Add Smurf"}
          </button>
        </form>
      </div>
    );
  }
}

export default AddSmurf;
