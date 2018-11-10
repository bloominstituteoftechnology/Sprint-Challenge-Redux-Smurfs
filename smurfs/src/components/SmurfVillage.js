import React from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/index'

import SmurfCard from './SmurfCard';

class SmurfVillage extends React.Component{
    componentDidMount(){
        this.props.fetchSmurfs();
    }

    render(){
        return(
            <div>
                {
                    this.props.fetching ?
                    <div>Loading Smurf Village...</div> :
                    this.props.smurfs.map(smurf=><SmurfCard key={smurf.id} smurf={smurf}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        smurfs: state.smurfs,
        fetching: state.fetching
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfVillage);