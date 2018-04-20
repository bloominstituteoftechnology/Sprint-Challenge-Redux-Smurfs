import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SmurfForm from './SmurfForm';
import Smurf from './Smurf';

class SmurfList extends Component {
  constructor() {
    super();

    this.state = {
      showUpdateModal: false,
      selectedSmurf: {}
    }
  }

  toggleModal = (smurf) => {
    this.setState({ 
      showUpdateModal: !this.state.showUpdateModal,
      selectedSmurf: smurf
    });
  };

  render() {
    return (
      <div>
      <Table>
         <thead>
           <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Age</th>
             <th>Height</th>
           </tr>
         </thead>
         <tbody>
           {this.props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} toggleModal={this.toggleModal} />)}
        </tbody>
      </Table>
      <Modal isOpen={this.state.showUpdateModal} toggle={this.toggleModal} className={this.props.className}>
        <ModalHeader toggle={this.toggleModal}>Update this Smurf!</ModalHeader>
        <ModalBody>
        </ModalBody>
          <SmurfForm toggleModal={this.toggleModal} currentSmurf={this.state.selectedSmurf} />
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
    ); 
  }
}

export default SmurfList;

