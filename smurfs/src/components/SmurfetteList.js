import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurfette from './Smurfette';

class SmurfetteList extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurfette Village</h1>
        <ul>
          { this.props.smurfs.map((smurfette, index) => {
            return <Smurfette smurfette={smurfette} key={index}/>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { smurfs: state.smurfs }
}

export default connect(mapStateToProps)(SmurfetteList);