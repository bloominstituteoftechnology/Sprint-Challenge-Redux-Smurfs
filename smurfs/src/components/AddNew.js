import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addingSmurf } from "../actions";

class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleInput = e => {
      console.log(e.target.name);
      console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
      console.log(e.target.tagName);
    if (e.key === "Enter" || e.target.tagName === "BUTTON") {
        console.log("addingSmurf called",this.state);
      this.props.addingSmurf(this.state);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    }
  };

  render() {
    return (
      <Form>
        <FormGroup onChange={this.handleInput} onKeyPress={this.handleSubmit}>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="name"
            name="name"
            id="name"
            value={this.state.name}
            placeholder="Smurf name..."
          />
          <Input
            type="age"
            name="age"
            id="age"
            value={this.state.age}
            placeholder="Smurf age..."
          />
          <Input
            type="height"
            name="height"
            id="height"
            value={this.state.height}
            placeholder="Smurf height..."
          />
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
export default connect((state) => {}, { addingSmurf })(AddNew);
