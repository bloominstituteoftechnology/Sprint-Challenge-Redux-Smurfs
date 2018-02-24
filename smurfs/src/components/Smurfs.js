import React from 'react';
import { loadSmurfs, removeSmurf } from '../actions';
import { connect } from 'react-redux';
import UpdateSmurfForm from './UpdateSmurfForm';

class Smurfs extends React.Component {

  state = {
    update: false,
    smurf: {},
  }

  componentDidMount() {
    this.props.loadSmurfs();
  }

  activateEdit = (id, name, age, height) => {
    this.setState({ update: !this.state.update, smurf: { id, name, age, height }});
  }

  deactivateEdit = () => {
    this.setState({ update: false });
  }

  removeSmurf = (id) => {
    this.props.removeSmurf(id);
  }

  render() {
    console.log('smurfs.js', this.props);
    return (
      <div>
        { this.props.loaded ?
        <ul className='smurf-container'>
          { this.props.smurfs.map((smurf) => {
            console.log(smurf);
              return (
                <li key={smurf.id} className='smurf'>
                  <div className='smurf-info'>
                    <div><span className='smurf-info-label'>Name:</span> <span>{smurf.name}</span></div>
                    <div><span className='smurf-info-label'>Age:</span> <span>{smurf.age}{'yr'}</span></div>
                    <div><span className='smurf-info-label'>Height:</span> <span>{smurf.height}{'cm'}</span></div>
                  </div>
                  <div className='smurf-buttons'>
                    <button onClick={() => this.activateEdit(smurf.id, smurf.name, smurf.age, smurf.height)}>Edit</button>
                    <button onClick={() => this.props.removeSmurf(smurf.id)}>Remove</button>
                  </div>
                </li>
              );
            })}
        </ul>
        :
        <div>
          Loading...
        </div>
        }
        { this.state.update ? <UpdateSmurfForm smurf={this.state.smurf} deactivateEdit={this.deactivateEdit} /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.payload,
    loaded: state.loaded,
    updated: state.updated,
    removed: state.removed,
  };
};

export default connect(mapStateToProps, { loadSmurfs, removeSmurf })(Smurfs);