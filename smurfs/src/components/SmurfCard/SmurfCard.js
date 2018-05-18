import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle } from 'reactstrap';
import AddEditModal from '../AddEditModal/AddEditModal';
import { updateSmurf, deleteSmurf } from '../../actions';
import './SmurfCard.css';

class SmurfCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnProps: {
        class: 'edit',
        text: 'Edit',
        hasIcon: false,
        icon: 'far fa-edit'
      }
    }
  }
  updateThisSmurf = (smurfObj, id) => {
    if (smurfObj) {
      this.props.updateSmurf(id, smurfObj);
    }
  };
  render() {
    return (
      <React.Fragment>
        <Card className="smurf">
          <CardTitle className="smurf-name">
            <span>{this.props.smurf.name}</span>
            <button className="remove" onClick={() => { this.props.deleteSmurf(this.props.smurf.id) }}>
              <i className="fas fa-times-circle"></i>
            </button>
          </CardTitle>
          <CardBody>
            {(this.props.smurf.image) ? <img alt={this.props.smurf.name} src={this.props.smurf.image} /> : null}
            <ul className="smurf-stats">
              <li>
                <h6 className="stat-title">Age</h6>
                <p>{this.props.smurf.age} years old</p>
              </li>
              <li>
                <h6 className="stat-title">Height</h6>
                <p>{this.props.smurf.height} tall</p>
              </li>
            </ul>
            <AddEditModal
              smurf={this.props.smurf}
              modalBtn={this.state.btnProps}
              modalTitle="Update smurf"
              actionTitle="Update"
              action={this.updateThisSmurf}
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(null, { updateSmurf, deleteSmurf })(SmurfCard);