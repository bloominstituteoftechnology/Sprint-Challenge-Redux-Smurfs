import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class App extends Component {
  state = { name: '', age: '', height: '' }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm addSmurf={this.onSubmit} onChange={this.onChange} current={this.state} />
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              smurf={smurf}
              key={smurf.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, isFetching, err }) => {
  return { smurfs, isFetching, err };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
