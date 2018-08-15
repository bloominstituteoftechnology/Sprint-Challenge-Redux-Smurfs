import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

class SmurfList extends Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.fetchingSmurfs ? (
                    <h3>Hold tight, we're fetching blue peeps...</h3>
                ) : null}
                {this.props.smurfs.map(smurf => {
                    return <Smurf key={smurf.id} smurf={smurf} />;
            })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);