import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'mdbreact';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: 100%;
    margin: 2% 10% 0 25%;
`;

function SmurfAddForm(props) {

    function handleSubmit(e) {
        e.preventDefault();

        props.handleAddSmurf(e);
        props.toggle();
    };

    return (
        <Wrapper>
            <Container>
            <Row>
            <Col md="6">
                <Card>
                <CardBody>
                    <form>
                    <p className="h4 text-center py-4">Add a Smurf</p>
                    <div className="grey-text">
                        <Input label="Name" group type="text" validate error="wrong" success="right" value={props.smurf.name} onChange={props.handleChange} name="name"/>
                        <Input label="Age" group type="text" validate value={props.smurf.age} onChange={props.handleChange} name="age"/>
                        <Input label="Height" group type="text" validate value={props.smurf.height} onChange={props.handleChange} name="height"/>
                    </div>
                    <div className="text-center py-4 mt-3">
                        {/* <Button className='btn btn-elegant' type="submit" onClick={event => {props.handleAddSmurf(event)}}>Add</Button> */}
                        {/* <button type="submit" onClick={event => {handleSubmit(event)}}>Add</button> */}
                        <button type="submit" onClick={event => {props.handleAddSmurf(event)}}>Add</button>
                    </div>
                    </form>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
      
        <Modal isOpen={props.modal14} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>Smurf</ModalHeader>
            <ModalBody>
                Smurf Added
            </ModalBody>
            <ModalFooter>
                <Button className='btn btn-elegant' onClick={props.toggle}>Ok</Button>
            </ModalFooter>
        </Modal>
        </Wrapper>
    );
};

export default SmurfAddForm;