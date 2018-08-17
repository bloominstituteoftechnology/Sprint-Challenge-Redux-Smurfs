import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions'
import Smurfs from './Smurfs';
import AddNewSmurf from './AddNewSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {   
  state = {
    addNewSmurf: false,
    name: '',
    age: null,
    height: null
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  handleInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onClickAdd = (event) => {
    console.log('~~~~~~~CLICKED~~~~~~')
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    this.setState({
      addNewSmurf: false,
      name: '',
      age: null,
      height: null
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>SMURFS</h1>
        </div>
        {this.props.smurfs.length === 0 
          ? <div>No smurfs to display</div>
          : this.props.fetchingSmurfs 
            ? <h1>Loading...</h1>
            : <Smurfs {...this.props} />}
        <div className="addNewsmurf">
          <div>
                <h1>Add Smurf</h1>
                <AddNewSmurf onChange={this.handleInputChange.bind(this)} onClick={this.onClickAdd}/>
              </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);


// {this.state.addNewSmurf 
//   ? 
//   : <button onClick={() =>  this.setState({
//       addNewUser: true
//   })}>Add NewUser</button> }