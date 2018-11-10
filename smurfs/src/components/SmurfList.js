import React from 'react';
import {connect} from 'react-redux';

import {getSmurf} from '../actions/index';

import Smurf from './Smurf';

class SmurfList extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getSmurf()
    }
    render(){
        return(
            <div className = 'list-container'>
                {this.props.smurfs.map(smurf =>{
                    <Smurf key = {Date.now()} smurf = {smurf}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{smurfs : state.smurfs}
}

export default connect(mapStateToProps, {getSmurf})(SmurfList)