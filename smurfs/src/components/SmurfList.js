import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { getSmurfs, addSmurf, updateSmurf, deleteSmurf, selectSmurf } from '../actions';
import './SmurfList.css';


class SmurfList extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
      id: 0,
    }
  }

  handleInput = (event) => {
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
      id: 0,
    });
  };

  handleSelect = (id) => {
    this.props.selectSmurf(id);
    setTimeout(() => {
    let { name, age, height } = this.props.smurf;
      this.setState({
        name: name,
        age: age,
        height: height,
        id: id,
      });
    }, 100);
  };

  handleUpdate = (event) => {
    event.preventDefault();
    let { name, age, height, id} = this.state;
    age = parseInt(age, 10);
    height = parseInt(height, 10);
    this.props.updateSmurf(name, age, height, id);
  };

  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteSmurf(this.state.id);
    this.setState({
      name: '',
      age: '',
      height: '',
      id: 0,
    });
  }

  render() {
    return (
      <Fragment>
        <Fragment>
          <ul className='smurfContainer'>
            {this.props.smurfs.map((smurf, i) => {
              return (
                <Fragment  key={i}>
                  <li className='smurfCard' key={smurf.id} onClick={()=>{this.handleSelect(smurf.id)}
                    }>
                    <p>ID: {smurf.id}</p>
                    <p>Name: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height} ft</p>
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
                <button onClick={this.handleUpdate}>Update Smurf</button>
                <button onClick={this.handleDelete}>Delete Smurf</button>
                <br />
                <p>Click on a smurf to update their information.</p>
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

export default connect(mapStateToProps, { getSmurfs, addSmurf, updateSmurf, deleteSmurf, selectSmurf, })(SmurfList);
