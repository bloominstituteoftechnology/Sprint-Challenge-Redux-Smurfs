import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import Smurf from '../views';
import SmurfForm from '../views';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    editId: null
  };

  componentDidMount() {
    this.props.getSmurf();
  }

  handleChange = event => {
    if (event.target.name === 'age') {
      const number = parseInt(event.target.value, 10);
      this.setState({ [event.target.name]: number });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleClick = event => {
    event.preventDefault();
    this.state.editId !== null
      ? this.props.updateSmurf(this.state)
      : this.props.addSmurf(this.state);
    this.setState({ name: '', age: '', height: '', editId: null });
  };

  deleteClick = event => {
    event.preventDefault();
    this.props.deleteSmurf(id);
  };

  editSmurf = smurf => {
    this.setState(
      {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        editId: smurf.id
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Smurfs Village</h1>
        <div>
          {this.props.fetching ? (
            <h2>La la la-la la la</h2>
          ) : (
            <Fragment>
              {this.props.smurfs.map(smurf => (
                <Smurf
                  key={smurf.id}
                  smurf={smurf}
                  deleteClick={this.deleteClick}
                  editSmurf={this.editSmurf}
                />
              ))}
            </Fragment>
          )}
        </div>
        <SmurfForm
          input={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurf, addSmurf, deleteSmurf, updateSmurf }
)(App);
