import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: (this.props.smurf !== undefined) ? this.props.smurf.name : '',
      age: (this.props.smurf !== undefined) ? this.props.smurf.age : '',
      height: (this.props.smurf !== undefined) ? this.props.smurf.height : ''
    }
    this.toggle = this.toggle.bind(this);
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  primaryAction = () => {
    if (this.props.smurf !== undefined) {
      this.props.action(this.getStateObj(), this.props.smurf.id);
    } else {
      this.props.action(this.getStateObj());
      this.setState({ name: '', age: '', height: '' });
    }

    this.toggle();
  };
  getStateObj = () => {
    return (this.state.name !== '' && this.state.age !== '' && this.state.height !== '')
      ? {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      : null;
  };
  render() {
    return (
      <React.Fragment>
        <button className={this.props.modalBtn.class} onClick={this.toggle}>
          {(this.props.modalBtn.hasIcon) ? <i className={`icon ${this.props.modalBtn.icon}`}></i> : null}
          <span>{this.props.modalBtn.text}</span>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.modalTitle}</ModalHeader>
          <ModalBody>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              name="age"
              type="number"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <input
              name="height"
              type="height"
              placeholder="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.primaryAction}>{this.props.actionTitle}</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  };
}

export default AddEditModal;