import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import { getSmurfs, deleteSmurf } from '../actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getSmurfs()
  }
  render() {
    const { fetchingSmurfs, deleteSmurf } = this.props
    console.log(this.props)
    return (
      <div>
        <AddForm />
        { !fetchingSmurfs && this.props.smurfs.map(smurf => 
          <div key={smurf.id}>
            <div>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
            <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(App);
