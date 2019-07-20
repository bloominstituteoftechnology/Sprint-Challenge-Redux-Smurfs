import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingSmurfs, addingSmurfs, deletingSmurf } from '../actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchingSmurfs();
    console.log(this.props);
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      id: this.state.smurfs.length,
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    this.props.addingSmurfs(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  deleteSmurf = id => {
    this.props.deletingSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <div>
          <p>Smurfs:</p>
            <form onSubmit={this.addSmurf}>
              <input 
                type='text'
                name='name'
                placeholder='name'
                value={this.state.name}
                onChange={this.changeHandler}
              />
              <input 
                type='text'
                name='age'
                placeholder='age'
                value={this.state.age}
                onChange={this.changeHandler}
              />
              <input 
                type='text'
                name='height'
                placeholder='height'
                value={this.state.height}
                onChange={this.changeHandler}
              />
              <button onClick={this.addSmurf}>Add Smurf!</button>
            </form>
          </div>
          <div className='Smurfs-container'>
            {this.props.smurfs.map(smurf => {
              return(
                <div className='smurf' key={smurf.name}>
                  <button 
                    className='delete-button'
                    key={smurf.id}
                    onClick={() => this.deleteSmurf(smurf.id)}
                  >
                    X
                  </button>
                  <p>Name: {smurf.name}</p>
                  <p>Age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
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
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, 
  { fetchingSmurfs, addingSmurfs, deletingSmurf }) (App);
