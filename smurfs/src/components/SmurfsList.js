import React, { Component } from 'react';
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';


class SmurfsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        this.props.getSmurfs();
    }
    render() { 
        return (
            <div>
                {this.props.smurfs.map((smurf) => <SmurfCard key={smurf.id} smurf={smurf} />)}
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    console.log("mapStateToProps list ", state);
    return {
        smurfs: state.smurfs,
        fetching: state.fetching,
        fetched: state.fetched,
        deleting: state.deleting,
        deleted: state.deleted,
        error: state.error
    };
}
 
export default connect(mapStateToProps, { getSmurfs })(SmurfsList);