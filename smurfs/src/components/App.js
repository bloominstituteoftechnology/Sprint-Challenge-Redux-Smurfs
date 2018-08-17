import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class App extends Component {
  state = { name: '', age: '', height: '' }

  /* Form methods (for passing down via props) */

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

  /* Smurf method(s) */

  updateSmurf = id => {
    const { name, age, height } = this.state;
    this.props.updateSmurf(id, { name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };

  /* Lifecycle methods */

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        {this.props.isFetching 
          ? ( <h1>Loading....</h1> )
          : (
            <div>
              <h1>SMURFS! 2.0 W/ Redux</h1>
              <SmurfForm addSmurf={this.onSubmit} onChange={this.onChange} values={this.state} />
              {this.props.smurfs.map(smurf => {
                return (
                  <Smurf
                    smurf={smurf}
                    key={smurf.id}
                    delete={() => this.props.deleteSmurf(smurf.id)}
                    update={() => this.updateSmurf(smurf.id)}
                  />
                );
              })}
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, isFetching }) => {
  return { smurfs, isFetching };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf, updateSmurf })(App);
