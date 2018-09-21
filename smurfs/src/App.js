import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import './styles/App.css';
import { fetchData, addSmurf} from './';
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

  render() {
    return (
      <div className="App">
        {!this.props.dataFetched ? (
          <h1>Loading Data Please Wait...</h1>
        ) : (
          <React.Fragment>
            <SmurfList
              smurfs={this.props.smurfss}
            />
            <SmurfForm
              inputData={this.state.inputData}
              handleInput={this.handleInput}
              handleAdd={this.handleAdd}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
