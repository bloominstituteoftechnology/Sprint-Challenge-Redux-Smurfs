import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className='container'>
        <h1 className='list-title'>sMuRf village</h1>
        <ul className='smurf-list'>
          {this.props.smurfs.map(smurf => {
            return (
              <li key={ smurf.id }>
                <div className="smurf-name">{smurf.name}</div>
                <div className="smurf-age">{`Age: ${smurf.age}`}</div>
                <div className="smurf-height">{`Height: ${smurf.height}`}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )  
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList)