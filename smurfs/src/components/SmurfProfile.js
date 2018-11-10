import React from 'react';
import { connect } from 'react-redux';


const SmurfProfile = (props) => {
    const smurf = props.smurfs.find(item => `${item.id}` === props.match.params.id);
    return (
    <div>
        <h1>{smurf.name}</h1>
        <button>Update Smurf</button>
        <button>Kick Out {smurf.name}</button>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
    smurfs: state.smurfs,
    }
  };
  
export default connect(mapStateToProps)(SmurfProfile);
