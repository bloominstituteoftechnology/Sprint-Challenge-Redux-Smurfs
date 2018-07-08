import React from 'react';

import { Card, CardTitle, CardText } from 'reactstrap';

export const SmurfChar = props => {
  const { name, age, height } = props.smurf
  return (
    <div className="SmurfCard">
      <Card key={name}>
        <CardTitle>{name}</CardTitle>
        <CardText>{age}</CardText>
        <CardText>{height}</CardText>
      </Card>
    </div>
  )  
}