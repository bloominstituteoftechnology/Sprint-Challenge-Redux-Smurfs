import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData, addSmurf} from './actions';
import SmurfList from './components/SmurfList';
import SmurfContainer from './components/SmurfContainer';

class App extends Component {
  state = {
    inputData: {
      name: '',
      age: '',
      height: '',
      id: '',
    },
  };

  componentDidMount() {
    this.props.fetchData();
  }
  
  handleInput = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAdd = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state.inputData);
    this.resetForm();
  };

  resetForm() {
    this.setState({
      inputData: {
        name: '',
        age: '',
        email: '',
      },
    });
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <SmurfContainer
            inputData={this.state.inputData}
            handleInput={this.handleInput}
            handleAdd={this.handleAdd}
          />
          <SmurfList 
            smurfs={this.props.smurfs}
          />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingData: state.fetchingData,
    dataFetched: state.dataFetched,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchData,
    addSmurf,
  }
)(App);