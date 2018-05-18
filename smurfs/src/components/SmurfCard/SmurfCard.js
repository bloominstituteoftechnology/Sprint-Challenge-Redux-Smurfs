import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle } from 'reactstrap';
import AddEditModal from '../AddEditModal/AddEditModal';
import { updateSmurf, deleteSmurf } from '../../actions';

class SmurfCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnProps: {
        class: 'edit',
        text: 'Edit',
        hasIcon: 'false',
        icon: ''
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
        <Card className="smurf" data-type="card">
          <CardBody>
            <button className="remove" onClick={() => { this.props.deleteSmurf(this.props.smurf.id) }}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <CardTitle className="smurf-name">{this.props.smurf.name}</CardTitle>
            <ul className="smurf-stats">
              <li>
                <p>{this.props.smurf.age} years old</p>
              </li>
              <li>
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