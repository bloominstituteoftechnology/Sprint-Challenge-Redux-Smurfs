import React from "react";
import { connect } from "react-redux";
// import FETCH_DATA, SUCCESS, FAILURE from  '../actions'
import SmurfList from './SmurfList';
// import actions
import { fetchData } from '../actions'
import { withRouter } from 'react-router-dom'

class SmurfListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (
      <h2>Fetching Smurfs...</h2>
      )
    }
    return (
      <div className='SmurfList'>
        <SmurfList smurfs={this.props} />
      </div>
    );
  }
}


// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    characters: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}
// the characters and the fetching boolean
export default withRouter(connect(
  mapStateToProps,
  { fetchData }
)(SmurfListView)
)