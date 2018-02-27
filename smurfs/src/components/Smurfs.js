import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import { Table, Grid, Col } from 'react-bootstrap';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <Grid>
        <Col>
          {this.props.error
            ? <h3>Error Fetching Smurfs</h3>
            : null
          }
          <div className="Flex-Container">
          {this.props.fetchingSmurfs
            ?  "Waiting for Smurfs..."
            : <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Action</th>
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
                        <td>
                            <button className={"btn btn-success btn-sm"}> Update </button>
                            &nbsp; &nbsp;
                            <button className={"btn btn-danger btn-sm"}> Delete </button>
                        </td>
                    </tr>
                  );
              })}
              </tbody>
              </Table>
            }
        </div>
    </Col>
</Grid>







    )
  }
}


const mapStateToProps = state => {
  const {rootReducer} = state;
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
