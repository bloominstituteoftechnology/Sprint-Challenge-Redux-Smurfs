import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Row, Col, Grid} from 'react-bootstrap';
import styled from 'styled-components';

class CreateSmurfForm extends Component {
    state = {
        showButtonHideForm:  this.props.showButtonHideForm,
        
    };

    showCreateNewForm = () =>{

        console.log('this is the clisk to show smurf change state');
        this.setState({showButtonHideForm: false });
    };

    render(){
        return (
            <div>
                {this.state.showButtonHideForm?
                        <NoSmurfs>
                            <h1>Snap!</h1>
                            <h2>You don't have Smurfs to Show.</h2>
                            <img alt={"sad-smurf"} src={"https://vignette.wikia.nocookie.net/filmguide/images/4/47/Mu-man-smurf.png/revision/latest?cb=20130824180136"}/><br/>
                            <button className={"btn btn-primary btn-lg"} onClick={this.showCreateNewForm}> Create New Smurf</button>
                        </NoSmurfs>
                    :
                        <CreateFormFriendContainer>
                            <Grid>
                                <Row className="show-grid">
                                    <Col md={6} className={"col-up"}>
                                        <form>
                                            <FormGroup>
                                                <div className={"title-form"}>
                                                    <ControlLabel><h2>Create New Smurf</h2></ControlLabel>
                                                </div>

                                                <ControlLabel><strong>Name:</strong></ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    value={this.state.name}
                                                    placeholder="Name"
                                                    onChange={this.updateName}
                                                    name={"name"}
                                                />
                                                <br/>
                                                <ControlLabel><strong>Age:</strong></ControlLabel>
                                                <FormControl
                                                    type="age"
                                                    value={this.state.age}
                                                    placeholder="Age"
                                                    onChange={this.updateAge}
                                                    name={"age"}
                                                />
                                                <br/>
                                                <ControlLabel><strong>Email:</strong></ControlLabel>
                                                <FormControl
                                                    type="email"
                                                    value={this.state.email}
                                                    placeholder="Email"
                                                    onChange={this.updateEmail}
                                                    name={"email"}
                                                />
                                                <div className={"btn-update"}>
                                                    <button onClick={(e) => {this.submitCreate(e, this.state.id)}} className={"btn btn-primary btn-md"}> Create New Smurf </button>
                                                </div>
                                            </FormGroup>
                                        </form>
                                    </Col>
                                </Row>
                            </Grid>
                        </CreateFormFriendContainer>

                 }
            </div>
        );
    }

}

export default CreateSmurfForm;

const CreateFormFriendContainer = styled.div`
    border:0px solid black;
    text-align:left;
    margin-top:10px;

        .title-form {
            text-align:center;
            padding:0px;
        }

        .col-up {
            border:1px solid grey;
            margin:0px auto;
        }

        .btn-update{
            text-align:center;
            margin-top:15px;
        }


`;
const NoSmurfs = styled.div`
    
    img {
        width:150px;
    }


`;
