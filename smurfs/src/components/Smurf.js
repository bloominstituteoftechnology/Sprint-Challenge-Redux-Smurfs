import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap'

class Smurf extends Component {
  render() {
    return (
      <div className="single-card">
      <Card>
        <img top width="100%" src="https://cdn.vox-cdn.com/thumbor/oIRY68qFM3SiUyNQWoYwt_c3BM4=/0x0:2560x1600/1200x800/filters:focal(1662x443:2070x851)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg" alt="da smurfs"/>
        <CardTitle>{this.props.smurf.name}</CardTitle>
        <CardText>{this.props.smurf.age}</CardText>
        <CardText>{this.props.smurf.height}</CardText>
        <Button>Say goodbye</Button>
      </Card>
      </div>
    );
  }
}

export default Smurf;
