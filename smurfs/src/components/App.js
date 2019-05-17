import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index';
import Smurfs from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm';
import SmurfProfile from '../components/SmurfProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    }
  }

  componentDidMount() {this.props.getSmurfs()}

  toggleNavbar = () => this.setState({collapsed: !this.state.collapsed});

  render() {
    return <div className='App'>
              <Container>
                  <Row>
                      <Col xs={"12"}md={{ size: 8, offset: 2 }}>
                          <Navbar color="info" light style={{marginBottom: '20px'}}>
                              <NavbarBrand href="/" className="mr-auto text-white">React Smurfs</NavbarBrand>
                              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                              <Collapse isOpen={!this.state.collapsed} navbar>
                                  <Nav navbar>
                                      <NavItem>
                                          <NavLink id='navlink' to="/" onClick={this.toggleNavbar}>Smurfs Village</NavLink>
                                      </NavItem>
                                      <NavItem>
                                          <NavLink id='navlink' to="/smurf-form" onClick={this.toggleNavbar}>Add New Smurf</NavLink>
                                      </NavItem>
                                  </Nav>
                              </Collapse>
                          </Navbar>                          
                          {this.props.loading ? <h1>Weare looking the smurfs in the village for you...</h1> : null}
                          {this.props.error ? <h2>{this.props.error}</h2> : null}
                          <Route exact path="/" render={props => <Smurfs {...props} />} />
                          <Route path="/smurf-form" render={props => <SmurfForm {...props} />} />
                          <Route path="/:id" render={props => <SmurfProfile {...props} />} />
                      </Col>
                  </Row>
              </Container>  
          </div>
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default withRouter(connect(()=>{return{}}, {getSmurfs} )(App));