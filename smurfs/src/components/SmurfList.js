import React from 'react';
import { Card, Segment, Header, Loader } from 'semantic-ui-react';

const SmurfList = ({smurfs, fetchingSmurfs}) => {
  return (
    <Segment>
      <Header as='h2'>Smurf List</Header>
      {
        fetchingSmurfs ?
          <Loader active inline='centered' /> :
          <Card.Group>
            {
              smurfs.map(smurf => (
                <Card key={smurf.id}>
                  <Card.Content>
                    <Card.Header>{smurf.name}</Card.Header>
                    <Card.Description>Age: {smurf.age}</Card.Description>
                    <Card.Description>Height: {smurf.height}</Card.Description>
                  </Card.Content>
                </Card>
              ))
            }
          </Card.Group>
      }
    </Segment>
  );
}
 
export default SmurfList;