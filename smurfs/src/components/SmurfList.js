import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from '../actions';
import './SmurfList.css';


class SmurfList extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
      id: 1,
    }
  }

  handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAdd = (event) => {
    event.preventDefault();
    let { name, age, height } = this.state;
    age = parseInt(age, 10);
    height = parseInt(height, 10);
    this.props.addSmurf(name, age, height);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  handleSelect = (event) => {
    event.preventDefault();
    this.props.getSmurf(this.state.id);
    setTimeout(() => {
      this.setState({
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height,
      });
    }, 100);
  };

  handleUpdate = (event) => {
    event.preventDefault();
    let { name, age, height, id} = this.state;
    age = parseInt(age, 10);
    height = parseInt(height, 10);
    this.props.updateSmurf(name, age, height, id);
    this.setState({
      name: '',
      age: '',
      height: '',
      id: 1
    });
  };

  render() {
    return (
      <Fragment>
        <Fragment>
          <ul className='smurfContainer'>
            {this.props.smurfs.map((smurf, i) => {
              return (
                <Fragment  key={i}>
                  <li className='smurfCard' key={smurf.id}>
                    <p>Name: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height} ft</p>
                    <button onClick={()=>{this.state.deleteSmurf(smurf.id)}}>
                      Delete
                    </button>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </Fragment>
        <Fragment>
            <form>
              <input onChange={this.handleInput} type='text' name='name' value={this.state.name} placeholder='Enter a smurfy name' /> <br />
              <input onChange={this.handleInput} type='number' name='age' value={this.state.age} placeholder="Enter a smurfy age" /> <br />
              <input onChange={this.handleInput} type='text' name='height' value={this.state.height} placeholder="Enter a smurfy size" /> <br />
              <input onChange={this.handleInput} type='number' name='id' value={this.state.id} placeholder="Enter the smurf's ID" />
              <br />
              <div className="buttonContainer">
                <button onClick={this.handleAdd}>Add Smurf</button>
                <button onClick={this.handleSelect}>Select Smurf</button>
                <button onClick={this.handleUpdate}>Update Smurf</button>
              </div>
          </form>
        </Fragment>
      </Fragment>
      );
    }
}


const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    smurf: state.smurf,
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, updateSmurf, deleteSmurf })(SmurfList);
