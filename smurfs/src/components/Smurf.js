import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import SmurfForm from './SmurfForm';
import { Container, StyledSmurf, SmurfInfo, SmurfActions } from '../Style';
import { deleteSmurf, getSmurf, updateSmurf, activeSmurfHandler} from '../actions';

class Smurf extends Component  {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSmurf(id);
    this.setState({smurf: this.props.activeSmurf});
  }

  formHandler = (ev) => {
    this.setState({ smurf: {...this.state.smurf, [ev.target.name]: ev.target.value }})
  }

  deleteSmurf = () => {
    this.props.deleteSmurf(this.props.activeSmurf.id)
    this.props.history.push('/');
  }

  showEdit = (ev) => {
    ev.preventDefault();
    this.props.history.push(`${this.props.location.pathname}/edit`);
  }

  editSmurf = (ev) => {
    ev.preventDefault();

    this.props.updateSmurf(this.props.activeSmurf);
    this.props.history.push(`/smurf/${this.props.activeSmurf.id}`);
  }

  cancelEdit = (ev) => {
    ev.preventDefault();
    const { id } = this.props.match.params;
    this.props.getSmurf(id);
    this.setState({smurf: this.props.activeSmurf},() => {
      this.props.history.push(`/smurf/${this.props.activeSmurf.id}`);
    });
  }

  render() {
    const { name, age, height, id } = this.props.activeSmurf;
    if(this.props.fetchingSmurf) return <h2>Loading Smurf...</h2>
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
              <i className="fas fa-edit" onClick={this.showEdit}/>
              <i className="fas fa-trash" onClick={() => this.deleteSmurf(id)}/>
          </SmurfActions>
        </StyledSmurf>

        <Route
          path={`${this.props.match.path}/edit`}
          render={(props) => 
            <SmurfForm
              {...props}
              smurf={this.props.activeSmurf}
              onChange={this.props.activeSmurfHandler}
              onSubmit={this.editSmurf}
              cancelEdit={this.cancelEdit}
              isEditMode
            />
          }
        />

      </Container>
    );
  }
};

const mapStateToProps = state => {
  const { fetchingSmurf, activeSmurf } = state;

  return {
    fetchingSmurf,
    activeSmurf
  }
}


export default connect(mapStateToProps, { getSmurf, deleteSmurf, updateSmurf, activeSmurfHandler })(Smurf);

