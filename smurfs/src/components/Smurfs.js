import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfsList from './SmurfsList';

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Smurfs</h1>
        <SmurfsList smurfs={this.props.smurfs} />
        <SmurfsForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurfs);
