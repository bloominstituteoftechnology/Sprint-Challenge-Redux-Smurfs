import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import CreateSmurfForm from './CreateSmurfForm';
import Smurf from './Smurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    editFriend: {}
  }

  componentDidMount(){
    this.props.fetchSmurfs();
  }

  startUpdate = (obj) =>{ 
    this.setState({
      editFriend: obj
    })
  }
  updateToList = (id,obj) => {
    this.props.updateSmurf(id, obj);
    this.setState({
      editFriend: {}
  })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <CreateSmurfForm {...this.props} editFriend={this.state.editFriend} updateToList={this.updateToList}/>
        <div className='list'>
        {this.props.smurfs.map((smurf,index) => (
              <Smurf
                  key={smurf.id}
                  smurf={smurf}
                  index={index}
                  deleteSmurf={this.props.deleteSmurf}
                  startUpdate={this.startUpdate}
              />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSmurfs, 
    addSmurf, 
    deleteSmurf, 
    updateSmurf
  }
)(App);
