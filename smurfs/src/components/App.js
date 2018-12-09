import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

class App extends Component {


  componentDidMount() {
    this.loadSmurfs();
  }
  
  onSmurfAddedButtonClick = () => {
    this.loadSmurfs();
  }
  
  loadSmurfs = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      let maxId = response.data[response.data.length-1].id+1;
      console.log("maxId: " + maxId);
      this.setState(() => ({ 
        smurfs: response.data,
        maxId: maxId,
        loading: false
      }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
  }

  render() {
    return (
      <div className="App">
        
        <Smurfs smurfs={this.state.smurfs} isFetching={this.state.fetchingSmurfs} />
      </div>
    );
  }
}

export default App;

/*
<SmurfForm {...props} />
 */