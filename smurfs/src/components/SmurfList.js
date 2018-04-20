import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import { Col, Row, Container, CardDeck, Card, CardTitle, CardBody } from 'reactstrap';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  };

  render() {
    console.log('smurfs list ', this.props)
    return (
      <Container>
        <Row className='justify-content-center'>
          <Col xs='8'>
            <div className='container'>
              <h1 className='list-title'>Smurfs' Village</h1>
            </div>
            <Row className='justify-content-center'>
              <Col xs='6'>
                <CardDeck>
                  <Card>
                    <CardTitle>
                      {this.props.smurfs.map(smurf => {
                        return (
                          <div key={ smurf.id }>
                          <div className="smurf-name">{smurf.name}</div>
                          </div>
                        )
                      })}
                    </CardTitle>
                      <ul className='smurf-list pl-0'>
                        {this.props.smurfs.map(smurf => {
                          return (
                            <div key={ smurf.id }>
                              <div className="smurf-age">{`Age: ${smurf.age}`}</div>
                              <div className="smurf-height">{`Height: ${smurf.height}`}</div>
                            </div>
                          )
                        })}
                      </ul>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )  
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList)