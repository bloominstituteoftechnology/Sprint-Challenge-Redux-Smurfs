import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';

import Smurf from './Smurf'
import './App.css';

class Smurfs extends React.Component {

    render() {
        return(
            <div className="smurfContainer">
                {this.props.smurfs.map(smurf => {
                    return (
                        <Smurf 
                            key={smurf.id}
                            id={smurf.id}
                            name={smurf.name}
                            age={smurf.age}
                            height={smurf.height}
                            deleteSmurf={this.props.deleteSmurf}
                            />
                    )
                })}
            </div>
        )
    }
};

const mapStateToProps = state => {
    console.log(state.smurfs)
    return {
        smurfs: state.smurfs,
        updateSmurfs: state.updatingSmurf
    }
};

export default connect(mapStateToProps, { deleteSmurf })(Smurfs);