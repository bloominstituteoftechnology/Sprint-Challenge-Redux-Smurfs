import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf, deleteSmurf } from '../actions'
import Smurf from './smurf';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: null,
      height: ''
    }
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  clickHandler = event => {
    event.preventDefault();
    console.log('click handler', this.state)
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };
  handleDelete=(event)=> {
    const id = event.target.id;
    event.preventDefault();
    console.log(id)
    this.props.deleteSmurf(id);
  }
  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  render() {
    return (
      <div className="App">
        <h1 className='main-header'>Welcome to Smurf Village</h1>
        <form onSubmit={this.clickHandler} className='form'>
          <h3 className='add-header'>Join the Smurfs</h3>
          <input 
            name='name' 
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleInputChange}></input>
          <input 
            type='number'
            name='age' 
            value={this.state.age}
            placeholder='Age'
            onChange={this.handleInputChange}></input>
          <input 
            name='height' 
            value={this.state.height}
            placeholder='Height'
            onChange={this.handleInputChange}></input>
          <button onClick={this.clickHandler}>Submit</button>
        </form>  
        <div className='smurfs-cards'> 
          {this.props.smurfs.map((smurf)=> {
            const id = smurf.id;
            return (
              <div className='smurf-card' key={id}>
                <Smurf 
                  id ={id} 
                  smurf={smurf}/>
                <button className='delete' id={id} onClick={this.handleDelete}>DELETE</button>
              </div>
            );
          })} 
        </div>      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching 
  };
};

export default connect(mapStateToProps,{ fetchSmurfs, addSmurf, deleteSmurf })(App);
