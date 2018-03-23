import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getSmurfs }  from '../actions';

class Smurfs extends Component {

  render() {
    return (
      <div>
        <div>
            {this.props.smurfs.map(smurf => {
                return (
                    <div>ajmal</div>
                )
            })}
        </div>
      </div>
    )
  }


  componentDidMount() {
    this.props.getSmurfs();
  }
}













const mapStateToProps = (state) => {
    return{
      smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
