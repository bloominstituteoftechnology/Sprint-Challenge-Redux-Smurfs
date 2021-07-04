import React from 'react';
import {connect} from 'react-redux';

class SmurfsList extends React.Component {
  
  render() { 
    return ( 
        this.props.smurfs.map( smurf => (
        <p key={Math.random()}>
          {smurf.name}, {smurf.age}, {smurf.height} 
        </p>))
     );
  }
}

const mapStatetoProps = state => {
  return {
    smurfs: state.smurfs
  }
}
 
export default connect(mapStatetoProps, {})(SmurfsList);
