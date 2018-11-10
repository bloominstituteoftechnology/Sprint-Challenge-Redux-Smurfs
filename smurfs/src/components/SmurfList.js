import React, {Component} from 'react';
import { connect } from 'react-redux';

import {getSmurfs} from '../actions/index';
import Smurf from './Smurf';


class SmurfList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getSmurfs()
    }

    render(){
        return(
            <div>
                {this.props.loading ? <h1>Loading</h1> : null}
                
                {this.props.error !== "" ? <h1>{this.props.error}</h1>: null}

                {this.props.smurfs.map( smurf => <Smurf smurfs={smurf} key={smurf.id} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfsReducer.smurfs,
        loading:state.smurfsReducer.loading,
        error:state.smurfsReducer.error

    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList)