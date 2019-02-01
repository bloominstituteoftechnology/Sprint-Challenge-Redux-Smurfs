import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const SingleSmurf = ({ smurfs }) => {
  return (
    <div>
      {smurfs.map(smrf => (
        <Card body key={smrf.id}>
          <CardTitle>{smrf.age}</CardTitle>
          <CardText>{smrf.name}</CardText>
          <CardText>{smrf.height}</CardText>
          <Button>Go here</Button>
        </Card>
      ))}
    </div>
  );
};

export default SingleSmurf;
