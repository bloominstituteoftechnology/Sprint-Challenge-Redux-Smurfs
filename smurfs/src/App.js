import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import './styles/App.css';
import { fetchData, addSmurf} from './actions';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';

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
    //When mounted, run the fetchData action which calls the API
    this.props.fetchData();
  }
  
  handleInput = (event) => {
    //Event handler for when you start typing in a form
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAdd = (event) => {
    //Event handler for when you click a button that you want to trigger info added
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
        {!this.props.dataFetched ? (
          <h1>Loading Data Please Wait...</h1>
        ) : (
          <React.Fragment>
            <SmurfForm
              inputData={this.state.inputData}
              handleInput={this.handleInput}
              handleAdd={this.handleAdd}
            />
            <SmurfList
              smurfs={this.props.smurfs}
            />
            
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //Basically maps actions and reducers to the state
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
