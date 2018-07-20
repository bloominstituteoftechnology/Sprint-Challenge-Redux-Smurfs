import React from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';


class Smurfs extends React.Component { 

  render() {
    const { name, age, height } = this.props.smurf;
  return (
    <div className="Smurfs">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
    </div>
  );
};
}


const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps,{ fetchSmurfs })(Smurfs);