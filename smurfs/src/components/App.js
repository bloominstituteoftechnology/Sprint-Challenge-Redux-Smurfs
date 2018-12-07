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
      mode: 'Add',
      id: ''
    }
  }

  componentDidMount() {
    this.props.requestSmurfs();
  }

  addSmurf = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
  }

  updateSmurf = () => {
    this.props.updateSmurf(this.state.smurf, this.state.id);
    this.defaultForm()
  }

  deleteSmurf = (id) => {
    this.props.deleteSmurf(id)
  }

  toggleMode = (id, name) => {
      this.setState({
        ...this.state,
       mode: 'Update',
       id: id,
       smurf: {
         ...this.state.smurf,
         name: name
       }
      })
  }

  defaultForm = () =>{
    this.setState({
      ...this.state,
      mode: 'Add',
     smurf: {
      ...this.state.smurf,
       name: '',
       age: '',
       height: ''
     }
    })
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      smurf: {
        ...this.state.smurf,
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
           name={this.state.smurf.name}
           age={this.state.smurf.age}
           height={this.state.smurf.height}
           addSmurf={this.addSmurf}
           updateSmurf={this.updateSmurf}
           deleteSmurf={this.deleteSmurf}
           smurfs={this.props.smurfs}
           defaultForm={this.defaultForm}
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
