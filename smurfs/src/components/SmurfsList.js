// React
import React, { Component } from 'react';
// Redux
import { connect } from "react-redux";
// actions
import { fetch_smurfs } from '../actions';

class SmurfsList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div>
                            <div>{smurf.name}</div>
                            <div>{smurf.age}</div>
                            <div>{smurf.height}cm</div>
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

export default connect(mapStateToProps, { fetch_smurfs })(SmurfsList);