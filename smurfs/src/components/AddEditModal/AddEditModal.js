import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddEditModal.css';


class AddEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      image: (this.props.smurf !== undefined) ? this.props.smurf.image : '',
      name: (this.props.smurf !== undefined) ? this.props.smurf.name : '',
      age: (this.props.smurf !== undefined) ? this.props.smurf.age : '',
      height: (this.props.smurf !== undefined) ? this.props.smurf.height : '',
      imageFocused: false,
      nameFocused: false,
      ageFocused: false,
      heightFocused: false
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
  setFocus = event => {
    this.removeFocus();
    this.setState({ [event.target.dataset.focus]: true });
  };
  removeFocus = () => {
    this.setState({ imageFocused: false, nameFocused: false, ageFocused: false, heightFocused: false });
  };
  primaryAction = () => {
    if (this.props.smurf !== undefined) {
      this.props.action(this.getStateObj(), this.props.smurf.id);
    } else {
      this.props.action(this.getStateObj());
      this.setState({ image: '', name: '', age: '', height: '' });
    }

    this.toggle();
  };
  getStateObj = () => {
    return (this.state.name !== '' && this.state.age !== '' && this.state.height !== '')
      ? {
        image: this.state.image,
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
        <Modal className="test" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="add-edit-header">{this.props.modalTitle}</ModalHeader>
          <ModalBody className="add-edit-fields">
            <div className="input-container">
              <input
                name="image"
                className="image"
                type="text"
                data-focus="imageFocused"
                value={this.state.image}
                onChange={this.handleChange}
                onFocus={this.setFocus}
                onBlur={this.removeFocus}
              />
              <label className={(this.state.imageFocused || this.state.image !== '') ? 'active' : null}>Image</label>
            </div>
            <div className="input-container">
              <input
                name="name"
                type="text"
                data-focus="nameFocused"
                value={this.state.name}
                onChange={this.handleChange}
                onFocus={this.setFocus}
                onBlur={this.removeFocus}
              />
              <label className={(this.state.nameFocused || this.state.name !== '') ? 'active' : null}>Name</label>
            </div>
            <div className="input-container">
              <input
                name="age"
                type="number"
                data-focus="ageFocused"
                value={this.state.age}
                onChange={this.handleChange}
                onFocus={this.setFocus}
                onBlur={this.removeFocus}
              />
              <label className={(this.state.ageFocused || this.state.age !== '') ? 'active' : null}>Age</label>
            </div>
            <div className="input-container">
              <input
                name="height"
                type="height"
                data-focus="heightFocused"
                value={this.state.height}
                onChange={this.handleChange}
                onFocus={this.setFocus}
                onBlur={this.removeFocus}
              />
              <label className={(this.state.heightFocused || this.state.height !== '') ? 'active' : null}>Height</label>
            </div>
          </ModalBody>
          <ModalFooter className="add-edit-actions">
            <button className="primary" onClick={this.primaryAction}>
              <span>{this.props.actionTitle}</span>
            </button>
            <button className="secondary" onClick={this.toggle}>
              <span>Cancel</span>
            </button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  };
}

export default AddEditModal;