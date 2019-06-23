import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addSmurf, updateSmurf, deleteSmurf, getSmurfs} from '../actions';
import SmurfForm from '../components/SmurfForm';
import SmurfList from '../components/SmurfList';
import '../components/forms.css'

class SmurfView extends Component {
  state = {
      ...this.props.smurfs
  }
componentDidMount(){
    this.props.getSmurfs()
}

editSmurf = (smurf) => {
  console.log(smurf.name, 2231)
  this.setState({
    isUpdating: true,
    smurf: {
    name: smurf.name,
    age: smurf.age,
    height: smurf.height,
    id: smurf.id
    }
  })
}

updateSmurf(e, smurf){
  e.preventDefault();
  console.log(smurf, 1232132342424234234243123)
this.props.updateSmurf(smurf)
this.setState({
  smurf: {
    name: '',
    age: '',
    height: '',
    id: ''
    }
})
}

handleChange = (e) => {
  this.setState({
    smurf: { ...this.state.smurf,
    [e.target.name]: e.target.value
    }
  })
}

  render() {
    return (
      <div >
          {this.state.isUpdating 
          ? 
          <form onSubmit= {e=> this.updateSmurf(e, this.state.smurf)}>
            <input name="name" value={this.state.smurf.name} onChange={this.handleChange}></input>
            <input name='height' value={this.state.smurf.height} onChange={this.handleChange}></input>
            <input name='age' value={this.state.smurf.age} onChange={this.handleChange}></input>
            <button>Submit</button>
          </form>
          :
          <SmurfForm addSmurf={this.props.addSmurf} />
        }
          <SmurfList smurfies={this.props.smurfs} deleteSmurf= {this.props.deleteSmurf} editSmurf= {this.editSmurf}/>
          
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isUpdating: state.isUpdating
}
}

export default connect(mapStateToProps, {addSmurf, updateSmurf, deleteSmurf, getSmurfs})(SmurfView);
