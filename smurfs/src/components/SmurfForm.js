import React from 'react';
import { Segment, Header, Grid, Form, Button } from 'semantic-ui-react'

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

  onCancel = e => {
    e.preventDefault();
    this.setState({
      id: '',
      name: '',
      age: '',
      height: '',
    })

    this.props.update && this.props.toggleForm();
  }

  componentWillReceiveProps(props, state) {
    const { smurf, update } =  props;

    if ( update && smurf ) {
      this.setState({
        id: smurf.id,
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
      })
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    }, this.state.id);
    this.setState({
      id: '',
      name: '',
      age: '',
      height: '',
    });

    this.props.update && this.props.toggleForm();
  }

  render() {
    if (this.props.addingSmurf) {
      return <h3>Adding a Smurf ... </h3>
    } else {
      return (
        <Segment className="add-smurf-form">
          <Header as="h2">{this.props.update ? 'Update a Smurf' : 'Add a Smurf'}</Header>
          <Grid style={{margin: '20px'}} centered>
            <Form style={{ width: '400px'}} onSubmit={this.onSubmit}>
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
              <div className="ui two buttons">
                <Button basic color='green' type="submit">{this.props.update? 'Update' : 'Add'}</Button>
                <Button basic color='red' onClick={this.onCancel}>Cancel</Button>
              </div>
            </Form>
          </Grid>
        </Segment>
      );
    }
  }
}

export default SmurfForm;