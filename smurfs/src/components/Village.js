import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

class Village extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchSmurfs()
    }

    render() {
        return (
            this.props.fetching ? 
            <div className='loading'>Loading Village</div> :
            <div className="village">Welcome to Smurf Village
                {this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetching
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(Village);