import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {

  render() {
    return (
      <div>
        {this.props.fetchingSmurfs ? <div>Loading...</div> : 
        this.props.smurfs.map((smurf)=>{
          return <div key={smurf.id}>{smurf.name}</div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  } 
}

export default connect(mapStateToProps)(List);