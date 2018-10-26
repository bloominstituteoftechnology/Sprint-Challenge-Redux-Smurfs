import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Container, StyledSmurf, SmurfInfo, SmurfActions } from '../Style';
import { deleteSmurf } from '../actions';

class Smurf extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: '',
        id: '',
      },
      fetchedSmurf: false,
      url: 'http://localhost:3333',
    }
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    const { url } = this.state;

    axios.get(`${url}/smurfs/${id}`)
      .then(res => this.setState({smurf: res.data, fetchedSmurf: true}))
      .catch(err => console.error(err));
  }

  deleteSmurf = () => {
    this.props.deleteSmurf(this.state.smurf.id)
    this.props.history.push('/');
  }

  render() {
    const { name, age, height, id } = this.state.smurf;
    if(!this.state.fetchedSmurf) return <h2>Loading Smurf...</h2>
    return (
      <Container>
        <StyledSmurf>
          <SmurfInfo>
            <div>
                <span>Name: {name}</span>
            </div>
            <div>
                <span>Age: {age} smurf years old</span>
            </div>
            <div>
                <span>Height: {height} tall</span>
            </div>
          </SmurfInfo>
          <SmurfActions>
              <i className="fas fa-edit" onClick={() => this.editSmurf(id, {name: name, age: age, height: height})}/>
              <i className="fas fa-trash" onClick={() => this.deleteSmurf(id)}/>
          </SmurfActions>
        </StyledSmurf>
      </Container>
    );
  }
};


export default connect(null, { deleteSmurf })(Smurf);

