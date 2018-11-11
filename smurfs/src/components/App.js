import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index';
import Smurfs from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm';

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
                                          <NavLink to="/" onClick={this.toggleNavbar}>Smurfs Village</NavLink>
                                      </NavItem>
                                      <NavItem>
                                          <NavLink to="/smurf-form" onClick={this.toggleNavbar}>Add New Smurf</NavLink>
                                      </NavItem>
                                  </Nav>
                              </Collapse>
                          </Navbar>
                          <Route exact path="/" render={props => <Smurfs {...props} />} />
                          <Route path="/smurf-form" render={props => <SmurfForm {...props} />} />
                          {/* <Route path="/:id" render={props => <SmurfProfile {...props} />} /> */}
                      </Col>
                  </Row>
              </Container>  
          </div>
  }
}

export default connect(()=>{return{}}, {getSmurfs} )(App);