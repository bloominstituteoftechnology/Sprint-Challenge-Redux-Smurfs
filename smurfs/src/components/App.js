import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf} from '../actions';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAddSmurfChange = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }


  render() {
    return (
      <div className='App'>
        <Smurfs smurfs={this.props.smurfs} />
        <SmurfForm 
          state={this.state}
          handleInput={this.handleInputChange}
          handleAddSmurf={this.handleAddSmurfChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    aaddingSmurf: state.addingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchSmurfs, addSmurf})(App)