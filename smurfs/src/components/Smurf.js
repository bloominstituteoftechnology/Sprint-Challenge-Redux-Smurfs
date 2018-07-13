import React, {Component} from 'react';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import { deleteSmurf, putSmurf } from '../actions/index';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
    this.putSmurf = this.putSmurf.bind(this);

  }
  deleteSmurf = () => {
    this.props.deleteSmurf(this.props.id);
  }
  editSmurf = () => {this.setState({editing: !this.state.editing})};
  putSmurf = (smurf) => {
    const { id } = this.props;
    this.props.putSmurf({id, ...smurf});
  this.setState({editing: false});
}

  render() {
    const { editing } = this.state;
    const {name, age, height} = this.props;
    const mainContent = (
      editing === false
      ? (
        <div>
          <div>{name}</div>
          <div>{age}</div>
          <div>{height}</div>
        </div>
      )
      : (
        <SmurfForm initialState={ { name, age, height } } submitForm={this.putSmurf} />
      )
    );

  return (
    <li>
      {mainContent}
      <button onClick={this.editSmurf}>Edit</button>
      <button onClick={this.deleteSmurf}>Delete</button>
    </li>
  )
}
}

export default connect(null, { deleteSmurf, putSmurf })(Smurf);