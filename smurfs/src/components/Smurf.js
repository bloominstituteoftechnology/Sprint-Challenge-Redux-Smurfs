import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Smurfs from './Smurfs';

class Smurf extends Component{
  render(){
    return(
    <div>
      <h1>Name: <Link to = {`/smurfs/profile/${props.id}`}>{props.name}</Link></h1>
      <h2>Height: {this.props.height}cm</h2>
      <h3>Age: {this.props.age} smurf years</h3>
    </div>
    )
  }
}

  export default Smurf;