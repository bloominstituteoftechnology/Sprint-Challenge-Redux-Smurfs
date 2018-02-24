import React, { Component } from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';


class Smurfs extends Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map((smurf, id) => {
                    return <Smurf key={id} smurf={smurf} />
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs }) (Smurfs);
