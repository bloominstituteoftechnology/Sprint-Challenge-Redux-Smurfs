import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';
import { getSmurfs, deleteSmurf, updateSmurf, saveSmurf } from '../actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getSmurfs()
  }
  render() {
    const { fetchingSmurfs, getSmurfs, deleteSmurf, updateSmurf, saveSmurf } = this.props
    console.log(this.props)
    return (
      <div>
        <AddForm />
        { !fetchingSmurfs && this.props.smurfs.map(smurf => 

          { return smurf.isUpdating ?
            (<UpdateForm key={smurf.id} />)
            : 
            (<div key={smurf.id}>
              <div>{smurf.name}</div>
              <div>{smurf.age}</div>
              <div>{smurf.height}</div>
              <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
              <button onClick={() => updateSmurf(smurf)}>Edit</button>
            </div>)
          }
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, updateSmurf, saveSmurf })(App);
