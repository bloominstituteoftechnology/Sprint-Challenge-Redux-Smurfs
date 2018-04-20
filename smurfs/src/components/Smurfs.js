import React, { Component } from 'react';
import { Container, Row, Card, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchSmurfs, deleteSmurf } from '../actions';
// import Smurf from './Smurf';

class Smurfs extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  deleteSmurf = smurfId => {
      this.props.deleteSmurf(smurfId);
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Container>
          <Row>
            {this.props.smurfs.map(smurf => {
              return (
                <Card
                  body
                  inverse
                  key={smurf.id}
                  style={{ backgroundColor: '#333', borderColor: '#333' }}
                >
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
                </Card>
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

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(Smurfs);
