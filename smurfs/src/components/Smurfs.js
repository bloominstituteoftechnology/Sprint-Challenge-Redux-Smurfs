import React, {Component} from 'react';
import CreateSmurfForm from './CreateSmurfForm'
import {Table, Grid, Col} from 'react-bootstrap';
import {showCreateForm} from '../actions'
import styled from 'styled-components';
import {connect} from 'react-redux';

class Smurfs extends Component {
    state = {
        showButtonHideForm:true,
    };

    showCreateForm = (val) => {
        // val is true when click
        this.props.showCreateForm(val);
        this.setState({showButtonHideForm: false});
    };

    render() {
        return (
            <Grid>
                <Col>
                    {(this.props.smurfs.length > 0 && !this.props.showCreateFormL) ?
                        <SmurfsContainer>
                            <div className="create-btn">
                                <button className={"btn btn-primary btn-sm"} onClick={() => this.showCreateForm(true)}>
                                    Create New
                                </button>
                            </div>
                            <Table striped bordered condensed hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Height</th>
                                </tr>
                                </thead>
                                <tbody>

                                {this.props.smurfs.map((smurf, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{smurf.name}</td>
                                            <td>{smurf.age}</td>
                                            <td>{smurf.height}</td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                        </SmurfsContainer>
                        : <CreateSmurfForm showButtonHideForm={this.state.showButtonHideForm}/>}
                </Col>
            </Grid>
        );
    }

}

const mapStateToProps = state => {
    const {smurfs_reducer} = state;
    return {
        showCreateFormL: smurfs_reducer.showCreateForm,
    }
};

export default connect(mapStateToProps, {showCreateForm})(Smurfs);



const SmurfsContainer = styled.div`

    .create-btn {
        text-align:left;
        padding:5px 0px 5px 0px;
    }

`;