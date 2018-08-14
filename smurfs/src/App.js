import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import SmurfsList from './components/SmurfsList';
import Smurf from './components/Smurf';
import { getSmurfs, addSmurf } from './actions';

class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleSmurfSubmit = e => {
    e.preventDefault();

    const newSmurf = { name: this.state.name,
                       age: this.state.age,
                       height: this.state.height };

    this.props.addSmurf(newSmurf);

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = e => {
    e.preventDefault();

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div>Loading smurfs...</div>
      )
    }

    return (
      <div className="container">
        <Header />

        <Route exact path="/" render={ props =>
            <SmurfsList smurfs={this.props.smurfs} />
          }
        />

        <Switch>

          <Route path="/smurfs/add" render={ props =>
            <Form name={this.state.name}
                         age={this.state.age}
                         height={this.state.height}
                         handleSmurfSubmit={this.handleSmurfSubmit}
                         handleInputChange={this.handleInputChange}
                         handleCancel={this.handleCancel} />
            }
          />

          <Route path="/smurfs/:id" render={ props =>
             <Smurf {...props} />
            }
          />

        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default withRouter(connect(mapStateToProps, { getSmurfs, addSmurf })(App));
