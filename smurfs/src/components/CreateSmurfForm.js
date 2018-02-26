import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Row, Col, Grid} from 'react-bootstrap';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addSmurf, showCreateForm} from '../actions';

class CreateSmurfForm extends Component {
    state = {
        showButtonHideForm:  this.props.showButtonHideForm,
        name: '',
        age: '',
        height: '',
    };

    showCreateNewForm = () => this.setState({showButtonHideForm: false });

    submitCreate = (e) => {
        e.preventDefault();
        this.props.showCreateForm(false);
        this.props.addSmurf(this.state);
    };

    cancelCreate = (e) => {
        e.preventDefault();
        this.props.showCreateForm(false);
    };

    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
                                                    onChange={this.updateField}
                                                    name={"name"}
                                                />
                                                <br/>
                                                <ControlLabel><strong>Age:</strong></ControlLabel>
                                                <FormControl
                                                    type="age"
                                                    value={this.state.age}
                                                    placeholder="Age"
                                                    onChange={this.updateField}
                                                    name={"age"}
                                                />
                                                <br/>
                                                <ControlLabel><strong>Height:</strong></ControlLabel>
                                                <FormControl
                                                    type="text"
                                                    value={this.state.height}
                                                    placeholder="Height"
                                                    onChange={this.updateField}
                                                    name={"height"}
                                                />
                                                <div className={"btn-update"}>
                                                    <button onClick={(e) => {this.submitCreate(e)}} className={"btn btn-primary btn-md"}> Create New Smurf </button>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <button onClick={(e) => {this.cancelCreate(e)}} className={"btn btn-danger btn-md"}> Cancel </button>
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

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {addSmurf, showCreateForm})(CreateSmurfForm);

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
