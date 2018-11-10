import React from "react";
import {connect} from "react-redux";
import {getSmurfs} from "../actions";

import SmurfList from './SmurfList'
// import actions

class SmurfListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getSmurfs()
  }

  render() {
    if (this.props.loading) {
      <h1>LOADING</h1>
    }
    return (<div>
       <SmurfList smurfs={this.props.smurfs} />
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {smurfs: state.smurfs, loading: state.loading, error: state.error}
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
  getSmurfs
  /* action creators go here */
})(SmurfListView);
