import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

class Smurfs extends Component {
    render() {
        return(
            <div>
            {this.props.smurfs.map(smurf => {
                console.log("Mapping smurfs");
                return(
                    <div key={smurf.id}>
                        {smurf.name}
                        {smurf.age}
                        {smurf.height}
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

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);