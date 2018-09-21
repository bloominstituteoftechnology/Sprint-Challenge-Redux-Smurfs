import React from 'react';
import {removeSmurf} from '../actions';
import {connect} from 'react-redux';
import UpdateSmurfForm from './UpdateSmurfForm';
import {withRouter} from 'react-router';

class Smurf extends React.Component {
  state = {
    showUpdateForm: false,
  }
  updateShowFormState = () => {
    this.setState({showUpdateForm: !this.state.showUpdateForm});
  }
  render() {
    return (
      <div>
        <h4>Name: {this.props.smurf.name}</h4>
        <p>Age: {this.props.smurf.age}</p>
        <p>Height: {this.props.smurf.height}</p>
        <button onClick={(e) => { 
          if(window.confirm("Are you sure you want to delete this item?")) {
            this.props.removeSmurf(this.props.smurf.id)
          } else {
            e.preventDefault();
          }
         }}>Remove This Smurf</button>
        <button onClick={() => this.setState({showUpdateForm: !this.state.showUpdateForm})}>{this.state.showUpdateForm ? 'Hide' : 'Show'} Update Form</button>
        {
          this.state.showUpdateForm ? <UpdateSmurfForm updateShowFormState={this.updateShowFormState} smurf={this.props.smurf} /> : ''
        }
      </div>
    )
  }
}

export default withRouter(connect(null, {removeSmurf})(Smurf));