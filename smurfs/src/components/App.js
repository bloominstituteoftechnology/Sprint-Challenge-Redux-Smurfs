import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getSmurfs()
  }
  render() {
    console.log(this.props)
    const { fetchingSmurfs } = this.props
    return (
      <div>
        <AddForm />
        { !fetchingSmurfs && this.props.smurfs.map(smurf => 
          <div key={smurf.id}>
            <div>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getSmurfs })(App);
