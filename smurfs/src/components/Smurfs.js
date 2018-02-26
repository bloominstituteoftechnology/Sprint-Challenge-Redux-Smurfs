import React, {Component} from 'react';
import CreateSmurfForm from './CreateSmurfForm'
import {Table, Grid, Col} from 'react-bootstrap';

class Smurfs extends Component {

    render() {
        return (
            <Grid>
                <Col>
                    {console.log(this.props.smurfs.length)}
                    {(this.props.smurfs.length > 0)?
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
                                    {/*<td>*/}

                                        {/*<button className={"btn btn-success btn-sm"} onClick={() => this.handleUpdateVisibility(smurf, index)}> Update </button>*/}
                                        {/*&nbsp; &nbsp;*/}
                                        {/*<button className={"btn btn-danger btn-sm"} onClick={() => this.handleDelete(index)}> Delete </button>*/}

                                    {/*</td>*/}
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>
                    : <CreateSmurfForm showButtonHideForm={true}/>}
                </Col>
            </Grid>
        );
    }

}

export default Smurfs;

