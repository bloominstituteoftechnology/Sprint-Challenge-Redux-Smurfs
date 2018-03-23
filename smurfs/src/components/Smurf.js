import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { deleteSmurf } from "../actions/index";

function mapStateToProps(state) {
  return {};
}

class Smurf extends Component {
  render() {
    console.log(this.props.smurf.id);
    return (
      <Card className="smurf">
        <CardBody>
          <CardTitle>{this.props.smurf.name}</CardTitle>
          <CardText>{this.props.smurf.age}</CardText>
          <CardText>{this.props.smurf.height}</CardText>
          <Button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
            X
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);
