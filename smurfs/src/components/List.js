import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.smurfs.map((smurf)=>{
          return(<Smurf key={smurf.id} smurf={smurf} id={smurf.id} />); 
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  } 
}

export default connect(mapStateToProps)(List);