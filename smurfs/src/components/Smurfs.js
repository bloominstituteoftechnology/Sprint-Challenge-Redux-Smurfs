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

  toggleEdit = (id, name, age, height) => {
    this.setState({ update: !this.state.update, smurf: { id, name, age, height }});
  }

  removeSmurf = (id) => {
    this.props.removeSmurf(id);
  }

  render() {
    console.log('smurfs.js', this.props);
    return (
      <div>
        { this.props.loaded ?
        <ul>
          { this.props.smurfs.map((smurf) => {
              return (
                <li key={smurf.id}>
                  <div>{smurf.name}</div>
                  <div>{smurf.age}</div>
                  <div>{smurf.height}{'cm'}</div>
                  <button onClick={() => this.toggleEdit(smurf.id, smurf.name, smurf.age, smurf.email)}>Edit</button>
                  <button onClick={() => this.props.removeSmurf(smurf.id)}>Remove</button>
                </li>
              );
            })}
        </ul>
        :
        <div>
          Loading...
        </div>
        }
        { this.state.update ? <UpdateSmurfForm smurf={this.smurf} /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.payload,
    loaded: state.loaded,
  };
};

export default connect(mapStateToProps, { loadSmurfs, removeSmurf })(Smurfs);