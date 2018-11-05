import React from 'react';
import './Smurfs.css'
import SelectedSmurf from './SelectedSmurf';
import { connect } from 'react-redux';
import { updateSingleSmurf } from '../actions';

class Smurfs extends React.Component {
  handleShowSmurf = smurf => {
    this.props.updateSingleSmurf(smurf);
  };


  render () {
    return(
      <div className='Smurfs'>  
        <div className='headingContainer'>
          <h1 className='villageSign'>Smurf Village</h1>
        </div>
          <h3 className='listHeader'>Click Smurfs!</h3>
          <div className='smurfListZone'>
            <div className='smurfListContainer'>
              <ul className='smurfList' >
                {this.props.smurfs.map( (smurf,i) => {
                  return(
                    <li 
                      className='smurfListName'
                      onClick= {() => this.handleShowSmurf(smurf)}
                      key={i} 
                      i={i}>
                      {smurf.name}
                    </li>
                  )
                })}
              </ul>
            </div>
              {Object.keys(this.props.smurfSelected).length > 0 ? (
                <SelectedSmurf 
                  selected={this.props.smurfSelected}
                  handleShowSmurf={this.handleShowSmurf}/>
              ) : null }
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.smurfsReducer.error,
    smurfSelected: state.singleSmurfReducer.smurfSelected
  };
};

export default connect(
  mapStateToProps,
  {
    updateSingleSmurf
  }
)(Smurfs);