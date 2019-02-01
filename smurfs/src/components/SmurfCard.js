import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const SmurfCard = ({ smurf: { age, name, height } }) => {
  return (
    <Card body>
      <CardTitle>{age}</CardTitle>
      <CardText>{name}</CardText>
      <CardText>{height}</CardText>
      <Button>Go here</Button>
    </Card>
  );
};

export default SmurfCard;
