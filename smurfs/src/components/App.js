import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import {
  Card,
  CardTitle,
  CardText,
  Form,
  Input,
  Button,
  InputGroup
} from "reactstrap";

import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form
          onSubmit={event => {
            event.preventDefault();
            this.props.addSmurf(this.state);
            this.setState({
              name: "",
              age: "",
              height: ""
            });
          }}
        >
          <InputGroup>
            <Input
              required
              type="text"
              placeholder="Enter Name"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
            <Input
              required
              type="text"
              placeholder="Enter Age"
              onChange={this.handleAgeChange}
              value={this.state.age}
            />
            <Input
              required
              type="text"
              placeholder="Enter Height in cm"
              onChange={this.handleHeightChange}
              value={this.state.height}
            />
          </InputGroup>
          <Button>Add Smurf</Button>
        </Form>
        {this.props.smurfs.map(smurf => (
          <Fragment>
            <Card key={smurf.id}>
              <CardTitle>{smurf.name}:</CardTitle>
              <CardText>
                {smurf.name} is {smurf.height} cm tall.
              </CardText>
              <CardText>
                {smurf.name} is {smurf.age} years old.
              </CardText>
            </Card>
            <Button
              onClick={() => {
                this.props.deleteSmurf(smurf.id);
                // setTimeout(() => {
                //   this.props.getSmurfs();
                // }, 100);
              }}
            >
              Exile Smurf
            </Button>
          </Fragment>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleAgeChange = event => {
    this.setState({ age: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleHeightChange = event => {
    this.setState({ height: event.target.value });
  };
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(
  App
);
