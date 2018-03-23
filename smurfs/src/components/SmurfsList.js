// React
import React, { Component } from 'react';
// Redux
import { connect } from "react-redux";
// actions
import { fetch_smurfs, delete_smurf } from '../actions';

class SmurfsList extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div key={`${smurf.name} ${smurf.id}`}>
                            <div>{smurf.name}</div>
                            <div>{smurf.age}</div>
                            <div>{smurf.height}cm</div>
                            <button onClick={() => this.props.delete_smurf(smurf.id)}>x</button>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.fetch_smurfs();
    }
}; // end of SmurfsList component

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

const actions = {
    fetch_smurfs,
    delete_smurf
};

export default connect(mapStateToProps, actions )(SmurfsList);