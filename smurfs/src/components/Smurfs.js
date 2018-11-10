import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf'

class Smurfs extends React.Component {

    render() {
        return(
            <div>
                {/* {this.props.smurfs.map(smurf => {
                    return (
                        <Smurf 
                            name={smurf.name}
                            age={smurf.age}
                            height={smurf.height}
                            />
                    )
                })} */}
            </div>
        )
    }
};

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state
    }
};

export default connect(mapStateToProps)(Smurfs);