import React from 'react';
import {connect} from 'react-redux';

import Smurf from "./Smurf";
import {fetchSmurfs} from "../actions";

class SmurfsList extends React.Component {
    componentDidMount(){
        this.props.fetchSmurfs();
    }

    render (){
        if (this.props.fetching) {
            return <h1>Please wait while we load your smurfs...</h1>
        }
        return (
            <div className="smurf-list-wrapper">
{this.props.smurfs.map(smurf=>{
    return (
        <Smurf key={smurf.id} smurf={smurf}/>
    )
})}
            </div>
        )
    }
}

const mapStateToProps =state => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetching
    }
}

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfsList);