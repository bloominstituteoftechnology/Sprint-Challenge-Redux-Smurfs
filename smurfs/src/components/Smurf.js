import React, { Component } from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import {deleteSmurf} from '../actions/index'
import { connect } from "react-redux";

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteSmurf = () => {};

  render() {
    return (
      <div className="single-card">
        <Card>
          <img
            top
            width="100%"
            src="https://cdn.vox-cdn.com/thumbor/oIRY68qFM3SiUyNQWoYwt_c3BM4=/0x0:2560x1600/1200x800/filters:focal(1662x443:2070x851)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg"
            alt="da smurfs"
          />
          <CardTitle>{this.props.smurf.name}</CardTitle>
          <CardText>{this.props.smurf.age}</CardText>
          <CardText>{this.props.smurf.height}</CardText>
          <Button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
            Say goodbye
          </Button>
        </Card>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf);