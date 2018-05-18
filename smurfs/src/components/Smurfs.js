import React, { Component } from "react";
import { getSmurfs, addSmurf, removeSmurf } from "../actions";
import { connect } from "react-redux";
import { Button, Col, Row, Card, CardBody } from "reactstrap";
class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSmurf = () => {
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({ name: "", age: "", height: "" });
  };

  updateOnClick = e => {
    this.props.updateData(e.target.name, {
      id: Number(e.target.name),
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    });
    this.setState({ name: "", age: "", email: "" });
  };
  render() {
    return (
      <div>
        <form className="inputForm">
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <input
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleInput}
          />
          <input
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.handleInput}
          />
          <Button color="danger" onClick={this.handleAddSmurf}>
            Submit
          </Button>
        </form>

        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              <Row className="card">
                <Col sm="3">
                  <Card>
                    <CardBody>
                      <div className="cardBody">
                        <h3>Name: {smurf.name}</h3>
                        <p>Age: {smurf.age} </p>
                        <p>Height: {smurf.height} </p>

                        <Button
                          className="deleteButton"
                          color="danger"
                          onClick={() => this.props.removeSmurf(smurf.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    updatingSmurfs: state.updatingSmurfs
  };
};
export default connect(mapStateToProps, { addSmurf, getSmurfs, removeSmurf })(
  Smurfs
);
