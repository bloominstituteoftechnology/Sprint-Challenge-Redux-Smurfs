import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, editSmurf } from '../actions';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const SmurfCard = styled(Card)`
  width: 300px;
  margin-bottom: 5px;
`;

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      edit: false,
      name: '',
      age: '',
      height: '',
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      edit: false,
    });
  };

  handleDelClick = id => {
    const URL = `http://localhost:3333/smurfs/${id}`;
    this.props.deleteSmurf(URL);
  };

  handleEditClick = () => {
    const { name, age, height } = this.props.smurf;
    this.setState({ edit: true, name, age, height });
    setTimeout(() => {
      document.getElementById('nameBox').select();
    }, 300);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCardClick = id => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmitEditClick = id => {
    const { name, age, height } = this.state;
    const editedSmurf = {
      name,
      age,
      height,
      id,
    };
    const URL = `http://localhost:3333/smurfs/${id}`;
    this.props.editSmurf(URL, editedSmurf);
    this.toggle();
  };

  render() {
    return (
      <div>
        <SmurfCard onClick={this.handleCardClick}>
          <Card body style={{ backgroundColor: 'aliceblue' }}>
            <CardTitle className="text-center">
              {this.props.smurf.name}
            </CardTitle>
            <CardText>Age: {this.props.smurf.age}</CardText>
            <CardText>height: {this.props.smurf.height}</CardText>
          </Card>
        </SmurfCard>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Smurf</ModalHeader>
            <ModalBody>
              {!this.state.edit ? (
                <React.Fragment>
                  <p>Name: {this.props.smurf.name}</p>
                  <p>Age: {this.props.smurf.age}</p>
                  <p>height: {this.props.smurf.height}</p>
                </React.Fragment>
              ) : (
                <Form>
                  <FormGroup row>
                    <Label for="Name" sm={2}>
                      Name
                    </Label>
                    <Col sm={10}>
                      <Input
                        name="name"
                        id="nameBox"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="Age" sm={2}>
                      Age
                    </Label>
                    <Col sm={10}>
                      <Input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="Height" sm={2}>
                      Height
                    </Label>
                    <Col sm={10}>
                      <Input
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              )}
            </ModalBody>
            <ModalFooter>
              {!this.state.edit ? (
                <span>
                  <Button
                    style={{ width: '70px', marginLeft: '-399px' }}
                    onClick={() => this.handleEditClick()}
                    className="btn btn-outline-primary float-left"
                  >
                    edit
                  </Button>
                  <Button
                    style={{ width: '70px' }}
                    onClick={() => this.handleDelClick(this.props.smurf.id)}
                    className="btn btn-outline-danger float-right"
                  >
                    delete
                  </Button>
                </span>
              ) : (
                <Button
                  style={{ width: '140px' }}
                  onClick={() =>
                    this.handleSubmitEditClick(this.props.smurf.id)
                  }
                  className="btn btn-outline-primary"
                >
                  submit edits
                </Button>
              )}
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf, editSmurf },
)(Smurf);
