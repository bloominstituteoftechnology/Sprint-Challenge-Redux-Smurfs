import React, { Component } from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';

class Smurfs extends Component {
    render() {
        return (
            <div className="smurf-list">
                {this.props.smurfs.map(smurf => 
                    <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />    
                )}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return { smurfs: state.smurfs };
}

export default connect(mapStatetoProps, { getSmurfs })(Smurfs);