import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { getSmurfsAction, addSmurfAction } from '../actions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      addSmurfName: '',
      addSmurfAge: '',
      addSmurfHeight: '',
      updateSmurfName: '',
      updateSmurfAge: '',
      updateSmurfHeight: '',
    }
  }

  componentDidMount = () => {
    this.props.getSmurfsAction();
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleAddSmurf = e => {
    e.preventDefault();
    const addSmurfInputs = document.querySelectorAll('.add-smurf-inputs');
    if(addSmurfInputs[0].value && addSmurfInputs[1].value && addSmurfInputs[2].value !== ''){
      this.props.addSmurfAction(this.state.addSmurfName, this.state.addSmurfAge, this.state.addSmurfHeight);
      this.setState({
        addSmurfName: '',
        addSmurfAge: '',
        addSmurfHeight: '',
      });
      Array.from(addSmurfInputs).map(x => {
        return x.value = ''
      });
    }
  }
  handle

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h4>Welcome to my Redux version of Smurfs!</h4>
        <form onSubmit={this.handleAddSmurf}>
          <input className='add-smurf-inputs' name='addSmurfName' placeholder='name' onChange={this.handleInputChange}></input>
          <input className='add-smurf-inputs' name='addSmurfAge' placeholder='age' onChange={this.handleInputChange}></input>
          <input className='add-smurf-inputs' name='addSmurfHeight' placeholder='height' onChange={this.handleInputChange}></input>
          <button>Add Smurf:</button>
        </form>
        <div className='smurfs-list'>
          {this.props.smurfs.map((x, index) => {
            return (
              <div key={index + 1} id={index + 1} className='each-smurf'>
                <p>Name: {x.name}</p>
                <p>Age: {x.age}</p>
                <p>Height: {x.height}</p>
                <form>
                  <input className='update-smurf-inputs' name='updateSmurfName' placeholder='name' onChange={this.handleInputChange}></input>
                  <input className='update-smurf-inputs' name='updateSmurfAge' placeholder='age' onChange={this.handleInputChange}></input>
                  <input className='update-smurf-inputs' name='updateSmurfHeight' placeholder='height' onChange={this.handleInputChange}></input>
                  <button>Update Smurf:</button>
                </form>
                <button>Delete Smurf:</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfsLoaded: state.smurfsLoaded,
    error: state.error,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
  }
}

export default connect(mapStateToProps, {getSmurfsAction, addSmurfAction })(App);
