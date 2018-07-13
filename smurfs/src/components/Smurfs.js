import React from 'react';
import { fetchSmurfs, deleteSmurf } from '../actions';
import { connect } from 'react-redux';


class Smurfs extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',
      id: 0
    }
  }

// componentDidMount() {

// }

handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

handleDeleteSmurf = id => {
    this.props.deleteSmurf(id);
}

  render() {
  return (
    <div className="Smurfs">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button {...this.props} onClick={this.deleteSmurf}>Delete Smurf</button>
    </div>
  );
};
}


const mapStateToProps = state => {
    return {
        fetchSmurfs: state.rootReducer.fetchSmurfs
    }
}

export default connect(mapStateToProps,{ fetchSmurfs, deleteSmurf })(Smurfs);
