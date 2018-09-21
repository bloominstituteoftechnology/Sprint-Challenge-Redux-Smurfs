import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { getSmurf } from '../../actions';

class Smurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  get id() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.props.getSmurf(this.id);
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    if (!this.props.smurf) {
      return (
        <div>Loading smurf...</div>
      )
    }

    return (
      <div className="smurf-page">
        <h3>{this.props.smurf.name}</h3>
        <h3>{this.props.smurf.age}</h3>
        <h3>{this.props.smurf.height}</h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    smurf: state.smurf,
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { getSmurf })(Smurf);
