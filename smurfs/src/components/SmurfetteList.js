import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurfette from './Smurfette';

class SmurfetteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    }
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
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