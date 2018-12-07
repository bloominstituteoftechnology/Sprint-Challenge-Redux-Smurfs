import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf.js';
import { fetchSmurfs } from '../actions';

import './SmurfList.scss';

class SmurfList extends React.Component {

  componentDidMount() {

    this.props.fetchSmurfs();

  }

  render() {

    const { smurfs, error, fetchingSmurfs } = this.props;

    if (error)
      return <h1>Error! {error}</h1>;

    if (fetchingSmurfs)
      return <h1>Fetching smurfs...</h1>;

    return (

      <div className='smurf-list'>

        {smurfs.map((smurf, id) => <Smurf key={id} smurf={smurf} />)}

      </div>

    );

  }

}

function mapStateToProps(state) {

  return {

    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs

  }

}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
