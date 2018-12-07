import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react'

class SmurfForm extends React.Component {
  state = {
    id: '',
    name: '',
    age: '',
    height: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    });
    this.setState({
      id: '',
      name: '',
      age: '',
      height: '',
    });
  }

  render() {
    if (this.props.addingSmurf) {
      return <h3>Adding a Smurf ... </h3>
    } else {
      return (
        <Segment className="add-smurf-form">
          <Header as="h2">Add a Smurf</Header>
          <Form action="submit" onSubmit={this.onSubmit}>
            <Form.Field>
              <input
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                type="text"
                placeholder="Add smurf's name"
              />
            </Form.Field>
            <Form.Field>
              <input
                name="age"
                value={this.state.age}
                onChange={this.onChange}
                type="text"
                placeholder="Add smurf's age"
              />
            </Form.Field>
            <Form.Field>
              <input
                name="height"
                value={this.state.height}
                onChange={this.onChange}
                type="text"
                placeholder="Add smurf's height"
              />
            </Form.Field>
            <Button type="submit">Add</Button>
          </Form>
        </Segment>
      );
    }
  }
}

export default SmurfForm;