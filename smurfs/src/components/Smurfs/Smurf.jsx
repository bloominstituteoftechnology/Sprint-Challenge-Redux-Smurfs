import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, CardGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'mdbreact';

class Smurf extends Component {
    state = {
        modal14: false,
    }

    toggle = () => {
        this.setState({ modal14: !this.state.modal14 });
    }

    handleSmurfDelete = e => {
        this.toggle();
        this.props.handleDelete(this.props.smurf.id)
    }

    render() {
        return (
            <CardGroup>
                <Card style={{width: '22rem', marginTop: '1rem'}} className="text-center">
                <CardHeader color="special-color-dark">{this.props.smurf.name}</CardHeader>
                <CardBody>
                <CardTitle>Information</CardTitle>
                <CardText>Age: {this.props.smurf.age}</CardText>
                <CardText>height: {this.props.smurf.height}</CardText>
                {/* <Button color="deep-orange lighten-1" size="sm" onClick={event => {event.preventDefault; props.goToUpdateFriendForm(event, props.friend.id)}}>Edit</Button> */}
                <Button onClick={this.toggle} color="red accent-4" size="sm">Delete</Button>
                </CardBody>
                </Card>
    
                <Modal isOpen={this.state.modal14} toggle={this.toggle} centered>
                <ModalHeader toggle={this.toggle}>Smurf</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this smurf?
                </ModalBody>
                <ModalFooter>
                <Button className='btn btn-elegant' onClick={this.toggle}>No</Button>
                    <Button className='btn btn-elegant' onClick={this.handleSmurfDelete}>Yes</Button>
                </ModalFooter>
            </Modal>
            </CardGroup>
        )
    }
};

export default Smurf;