import React, { Component } from 'react';
import './App.css';
import { fetchSmurf, addSmurf, updateSmurf, deleteSmurf } from '../actions/index';
import { connect } from 'react-redux';

class AppContainer extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount () {
    console.log('hi')
    this.props.fetchSmurf();
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClear = () => {
    this.setState({ name: '', age: '', height: '' });
  }

  render () {
    const { addSmurf, updateSmurf, deleteSmurf } = this.props;
    const { name, age, height } = this.state;
    let newSmurf = {
      name,
      age,
      height
    };

    return (
      <div>
        <input onChange={this.handleOnChange} type="text" name="name" placeholder="name" value={this.state.name} /> 
        <input onChange={this.handleOnChange} type="text" name="age" placeholder="age" value={this.state.age} /> 
        <input onChange={this.handleOnChange} type="text" name="height" placeholder="height" value={this.state.height} />
        <button onClick={() => {
          addSmurf(newSmurf);
          this.handleClear();
        }}>Add Smurf</button>

        { ! this.props.isFetched && ! this.props.isAdded && ! this.props.isUpdated && ! this.props.isDeleted
           ? <p>There is no smurf...</p>
           : (
             this.props.smurfs.map(smurf => {
               return (
                 <div>
                    <ul>
                      <li>{smurf.name}</li>
                      <li>{smurf.age}</li>
                      <li>{smurf.height}</li>
                      <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
                      <button onClick={() => {
                        updateSmurf(smurf.id, newSmurf);
                        this.handleClear();
                      }}>Update</button>
                    </ul>
                 </div>
               )
             })
           ) 
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state };
}

export default connect(
  mapStateToProps,
  { fetchSmurf, addSmurf, updateSmurf, deleteSmurf }
)(AppContainer);