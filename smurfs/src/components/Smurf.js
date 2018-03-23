import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class Smurf extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.smurf.name}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(Smurf);
