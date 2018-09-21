import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, deleteSmurf } from '../actions';

class Smurfs extends Component {
    render() {
        return(
            <div>
            {this.props.smurfs.map(smurf => {
                return(
                    <div key={smurf.id}>
                        <h3>{smurf.name}</h3>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                        <button onClick={() => this.props.deleteSmurf(smurf.id)}>Delete Smurf</button>
                    </div> 
                )
            })}
        </div>
        )
    }

    componentDidMount() {
        this.props.fetchSmurfs();
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(Smurfs);