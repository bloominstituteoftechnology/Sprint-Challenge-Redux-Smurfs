import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSmurfs } from '../actions/index'
import Smurf from "./Smurf";

class Smurfs extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSmurfs()
    }

    render(){
        return(
            <div>
                {this.props.fetchingSmurfs ? <h1>LOADING</h1> : null}

                {this.props.error !== '' ? <h1>{this.props.error}</h1> : null } 

                {this.props.smurfs.map(item => <Smurf smurf={item} key={item.id}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps, { getSmurfs})(Smurfs)