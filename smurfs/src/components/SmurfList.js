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
                {this.props.fetching ? <h2>Fetching Data. Please Wait</h2> : null };
                {this.props.error !== '' ? <h2>{this.props.error}</h2>: '' };
                {this.props.smurfs.map(smurf => 
                    <Smurf smurf={smurf} key={smurf.id + smurf.name}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfReducer.smurfs,
        fetching: state.smurfReducer.fetching,
        error: state.smurfReducer.error,
    }
}

export default connect(mapStateToProps, {fetchingSmurfs})(SmurfList);