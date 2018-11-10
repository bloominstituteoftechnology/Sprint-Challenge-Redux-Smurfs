import React from 'react';
import { fetchingSmurfs } from '../actions';
import Smurf from './Smurf';
import { connect } from 'react-redux';

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.fetchingSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.fetching ? <h2>Fetching Data. Please Wait</h2> : null }
                {this.props.error !== '' ? <h2>{this.props.error}</h2>: '' }
                {this.props.smurfs.map(smurf => 
                    <Smurf smurf={smurf} key={smurf.id} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {fetchingSmurfs})(SmurfList);