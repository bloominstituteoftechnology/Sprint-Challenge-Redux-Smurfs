import React, { Component } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmufs } from '../actions';

class SmurfsList extends Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }
    render() {
        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    return <Smurf smurf={}/>
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
export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);