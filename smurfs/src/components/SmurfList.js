import React from 'react';
import { Card, Segment, Header, Loader, Button } from 'semantic-ui-react';

const SmurfList = ({smurfs, error, fetchingSmurfs, deleteSmurf}) => {
  return (
    <Segment>
      <Header as='h2'>Smurf List</Header>
      {
        error ?
          <Header as="h4">Something has gone teribbly wrong.</Header> :
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
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button basic color='green'>
                          Update
                        </Button>
                        <Button onClick={() => deleteSmurf(smurf.id)} basic color='red'>
                          Delete
                        </Button>
                      </div>
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