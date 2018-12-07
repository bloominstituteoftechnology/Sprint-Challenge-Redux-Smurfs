import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  requestSmurfs,
  addSmurf,
  updateSmurf,
  deleteSmurf
} from '../actions';
import {GlobalStyle, AppContainer, H1} from '../styles'
import SmurfVillage from './SmurfVillage'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      smurf: {
        name: '',
        age: '',
        height: ''
      },
      mode: 'Add'
    }
  }

  componentDidMount() {
    this.props.requestSmurfs();
  }

  addSmurf = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state.friend);
  }

  updateSmurf = (id) => {
    this.props.updateSmurf(this.state.friend, id)
  }

  deleteSmurf = (id) => {
    this.props.deleteSmurf(id)
  }

  toggleMode = () => {
      this.setState({
        ...this.state,
       mode: 'Update'
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    })
  }



  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <H1>Welcome to Smurf Village</H1>
          <SmurfVillage 
           mode={this.state.mode}
           toggleMode={this.toggleMode}
           handleChange={this.handleChange}
           name={this.state.name}
           age={this.state.age}
           height={this.state.height}
           addSmurf={this.addSmurf}
           updateSmurf={this.updateSmurf}
           deleteSmurf={this.deleteSmurf}
           smurfs={this.props.smurfs}
          />
        </AppContainer>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  requestingData: state.requestingData
})

export default connect(
  mapStateToProps,
  {
    requestSmurfs,
    addSmurf,
    updateSmurf,
    deleteSmurf
  }
)(App);
