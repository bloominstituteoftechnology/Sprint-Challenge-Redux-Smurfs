import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

import Smurf from './Smurf';

class SmurfsList extends React.Component {
  componentDidMount(){
    this.props.getSmurfs()
  }

  render(){
    return (
      <div className="smurf-list">
        {this.props.loading ? <h1>Loading...</h1> : null}

        {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}

        {this.props.smurfs.map(smurf => <Smurf 
                                          key={smurf.id}
                                          smurf={smurf} 
                                        />
                              )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfsList);