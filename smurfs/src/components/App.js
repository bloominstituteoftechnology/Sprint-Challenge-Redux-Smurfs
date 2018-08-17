import React, { Component } from 'react';
import './App.css';
import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';
import {connect} from 'react-redux';
import {getSmurfs,
        addSmurf,
        updateSmurf,
        deleteSmurf} from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }
  handleChanges = e => {
    this.setState({[e.target.name]:e.target.value})
  }
  add = () => {
    this.props.addSmurf(this.state.name, this.state.age, this.state.height);
    window.location.reload();
    this.setState({name: '', age:'',height:''})
  }
  update = e => {
    this.props.updateSmurf(
      this.state.name,
      this.state.age,
      this.state.height,
      e.target.id
    )
    window.location.reload();
    this.setState({name: '', age: '', height:''})
  }
  delete = e => {
    this.props.deleteSmurf(e.target.id);
    window.location.reload();
  }
  componentDidMount(){
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
          <h1>Smurfs Village</h1>
          <SmurfsList smurfs={this.props.smurfs}
                      submitUpdate={this.props.update}
                      submitDelete={this.props.delete}/>
          <AddSmurf inputName={this.state.name}
                    inputAge={this.state.age}
                    inputHeight={this.state.height}
                    handleChange={this.handleChanges}
                    addSmurf={this.add} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    smurfs : state.smurfs,
})

export default connect(mapStateToProps,
  {getSmurfs,
  addSmurf,
  updateSmurf,
  deleteSmurf})(App);
