import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf'
import './App.css';

class Smurfs extends React.Component {

    render() {
        return(
            <div className="smurfContainer">
                {this.props.smurfs.map(smurf => {
                    return (
                        <Smurf 
                            name={smurf.name}
                            age={smurf.age}
                            height={smurf.height}
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
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps)(Smurfs);