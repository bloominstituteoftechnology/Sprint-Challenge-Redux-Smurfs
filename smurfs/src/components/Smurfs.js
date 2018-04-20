import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchSmurfs, updateSmurf, deleteSmurf } from '../actions';
import './Smurfs.css';

class Smurfs extends Component {
    constructor(props){
        super(props);
        this.state = {
            showUpdateSmurfForm: false,
            name: '',
            age: '',
            height: '',
        }
    }
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    deleteSmurf = smurfId => {
        this.props.deleteSmurf(smurfId);
    };

    updateSmurf = smurfId => {
        const smurf = {};
        if (this.state.name !== '') {
        smurf.name = this.state.name;
        }
        if (this.state.age !== '') {
        smurf.age = Number(this.state.age);
        }
        if (this.state.height !== '') {
        smurf.height = this.state.height;
        }
        this.props.updateSmurf(smurfId, smurf);
        this.setState({name: '', age: '', height: ''});
    }

    showUpdateSmurfForm = () => {
        this.setState({ showUpdateSmurfForm: !this.state.showUpdateSmurfForm});
    }

    handleEditSmurf = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
        <div className="Smurfs">
            <h1>Smurf Village</h1>
            <Container>
                <Row className="smurfsRow">
                    {this.props.smurfs.map(smurf => {
                    return (
                        <div key={smurf.id} className="smurfCard">
                            <Col sm="12">
                                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <h3>{smurf.name}</h3>
                                    <strong>{smurf.height} tall</strong>
                                    <p>{smurf.age} smurf years old</p>
                                    <div className="editSmurf">
                                        <Button
                                        color="warning"
                                        className="editSmurfButton"
                                        onClick={this.showUpdateSmurfForm}
                                        >
                                        Update
                                        </Button>
                                        <Button
                                        color="danger"
                                        className="editSmurfButton"
                                        onClick={() => this.deleteSmurf(smurf.id)}
                                        >
                                        Delete
                                        </Button>
                                    </div>
                                    {this.state.showUpdateSmurfForm ? (
                                        <div>
                                        <input
                                            type="text"
                                            onChange={this.handleEditSmurf}
                                            placeholder="name"
                                            name="name"
                                            value={this.state.name}
                                        />
                                        <input
                                            type="text"
                                            onChange={this.handleEditSmurf}
                                            placeholder="age"
                                            name="age"
                                            value={this.state.age}
                                        />
                                        <input
                                            type="text"
                                            onChange={this.handleEditSmurf}
                                            placeholder="height"
                                            name="height"
                                            value={this.state.height}
                                        />
                                        <button onClick={() => this.updateSmurf(smurf.id)}>
                                            Update Smurf
                                        </button>
                                        </div>
                                    ) : null}
                                </Card>
                            </Col>
                        </div>
                    );
                    })}
                </Row>
            </Container>
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    smurfs:  state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs, updateSmurf, deleteSmurf })(Smurfs);
