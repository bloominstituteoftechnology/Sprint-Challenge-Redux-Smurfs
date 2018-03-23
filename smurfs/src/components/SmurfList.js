import React, { Component } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { Row, Col } from "reactstrap";

function mapStateToProps(state) {
  return { smurfs: state.smurfs };
}

class SmurfList extends Component {
  render() {
    return (
      <Row>
        {this.props.smurfs.map(smurf => (
          <Col sm={6}>
            <Smurf smurf={smurf} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default connect(mapStateToProps)(SmurfList);
