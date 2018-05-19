import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';
import './Smurfs.css';
import { deleteSmurf } from '../actions';
import { updateSmurf } from '../actions';

class SmurfsList extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
        this.showForm = false;
        this.click = false;
    }

    handleOnChange = (event) => {
        if (event.target.name === 'age' && isNaN(event.target.value) === true) {
            alert('You need to type a number in the age input field.')
        }
        else {
            this.setState({ [event.target.name]: event.target.value });
        }
    }

    handleOnClick = (event) => {

        const button = document.getElementsByTagName('button');

        this.click = !this.click;

        if (this.click) {
            for (let i = 0; i < button.length; i++) {
                if (button[i].getAttribute('id') !== `deleteButton${event.target.name}` && button[i].getAttribute('id') !== `changeButton${event.target.name}` && button[i].getAttribute('id') !== `updateButton${event.target.name}` && button[i].getAttribute('id') !== `cancelButton${event.target.name}`) {
                    button[i].disabled = true;
                }
            }
        }
        else {
            for (let i = 0; i < button.length; i++) {
                button[i].disabled = false;
            }
        }

        this.showForm = !this.showForm;

        const divone = document.getElementById(`${event.target.name}`);
        const divtwo = document.getElementById(`${'smurf' + event.target.name}`);

        if (this.showForm === true) {
            divone.style.display = "none";
            divtwo.style.display = "initial"
        }
        else {
            divone.style.display = "initial";
            divtwo.style.display = "none"
        }
    }


    updateOnClick = (event) => {

        const button = document.getElementsByTagName('button');

        this.click = !this.click;

        for (let i = 0; i < button.length; i++) {
            button[i].disabled = false;
        }

        this.props.updateSmurf(event.target.name, { name: this.state.name, age: Number(this.state.age), height: this.state.height, id: Number(event.target.name) });
        this.setState({ name: '', age: '', height: '' });

        this.showForm = !this.showForm;

        const divone = document.getElementById(`${event.target.name}`);
        const divtwo = document.getElementById(`${'smurf' + event.target.name}`);

        if (this.showForm === true) {
            divone.style.display = "none";
            divtwo.style.display = "initial"
        }
        else {
            divone.style.display = "initial";
            divtwo.style.display = "none"
        }
    }

    render() {
        return (
            <div className="cards">
                {this.props.smurfs.map((smurf) => {
                    return (
                        <div key={smurf.id}>
                            <Row id={smurf.id}>
                                <Col sm="6">
                                    <Card className="card">
                                        <CardBody>
                                            <CardText>Smurf Name: {smurf.name}</CardText>
                                            <CardText>Smurf Age: {smurf.age}</CardText>
                                            <CardText>Smurf Height: {smurf.height}</CardText>
                                            <button id={'deleteButton' + smurf.id} onClick={() => this.props.deleteSmurf(smurf.id)}>Delete Smurf</button><br /><br />
                                            <button id={'changeButton' + smurf.id} name={smurf.id} onClick={this.handleOnClick}>Change Smurf Information</button><br />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <div id={'smurf' + smurf.id} style={{ display: 'none' }}>
                                <input type="text" name="name" value={this.state.name} placeholder={smurf.name} onChange={this.handleOnChange} /><br />
                                <input type="type" name="age" value={this.state.age} placeholder={smurf.age} onChange={this.handleOnChange} /><br />
                                <input type="height" name="height" value={this.state.height} placeholder={smurf.height} onChange={this.handleOnChange} /><br />
                                <button id={'updateButton' + smurf.id} name={smurf.id} onClick={this.updateOnClick}>Update Smurf Information</button>
                                <button id={'cancelButton' + smurf.id} name={smurf.id} onClick={this.handleOnClick}>Cancel</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            smurfs: state.smurfs,
            fetchingSmurfs: state.fetchingSmurfs,
            smurfsFetched: state.smurfsFetched,
            savingSmurfs: state.savingSmurfs,
            smurfsSaved: state.smurfsSaved,
            deletingSmurf: state.deletingSmurf,
            smurfDeleted: state.smurfDeleted,
            updatingSmurf: state.updatingSmurf,
            smurfUpdated: state.smurfUpdated,
            error: state.error
        }
    )
}

export default connect(mapStateToProps, { deleteSmurf, updateSmurf })(SmurfsList); 
