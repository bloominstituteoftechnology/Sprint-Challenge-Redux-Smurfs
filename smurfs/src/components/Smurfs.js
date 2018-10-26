import React from 'react';
import SmurfCard from './SmurfCard';
import { Container } from '../Style';

const Smurfs = props => {
  if (props.fetchingSmurfs) return <h2>Loading Smurfs...</h2>
  if (props.addingSmurf) return <h2>Adding Smurfs...</h2>
  if (props.deletingsmurf) return <h2>Deleting Smurfs...</h2>
  return (
    <div>
      <h1>Smurf Village</h1>
      <Container>
      {props.smurfs.map(smurf => {
        return (
          <SmurfCard
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            onClick={(e) => props.onClick(e, props.history, smurf.id)}
          />
          );
        })}
      </Container>
    </div>
  );
};

export default Smurfs;
